"use client";

import { useState, useCallback, useEffect } from "react";
import { useRef } from "react";
import { useForm, SubmitHandler, set } from "react-hook-form";
import InputField from "@/components/forms/input_components/InputField";
import { useTranslations } from "next-intl";
import { FORM_REGEX } from "@/components/forms/formRegex";
import AnimatedButton from "@/components/common/AnimatedButton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FaRegThumbsUp } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const NEWSLETTER_API_ENDPOINT = "/api/newsletter";

type NewsletterInputProps = {
    placeholder: string;
    cta: string;
    success: {
        title: string;
        message: string;
    }
    error: {
        title: string;
        message: string;
    }
};

interface IFormInput {
    email: string;
}

export default function NewsletterInput({
    cta,
    placeholder,
    success,
    error,
}: NewsletterInputProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<IFormInput>();
    const t = useTranslations("Forms.contact");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const emailRef = useRef<HTMLInputElement>(null);

    /**
     * Fully reset the form state
     */
    const handleReset = useCallback(() => {
        setIsSubmitting(false);
        setSubmitStatus("idle");
    }, []);

    /**
     * Wait 3 sec and reset submit status
     */
    useEffect(() => {
        if (submitStatus !== "idle") {
            const timer = setTimeout(() => {
                handleReset();
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [submitStatus]);

    /**
     * Form submission handler from react-hook-form
     */
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        // Reset the form state
        handleReset();

        // Display the submitting message
        setIsSubmitting(true);

        try {
            // Submit form data
            const response = await fetch(NEWSLETTER_API_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            
            if (response.status !== 200) {
                throw new Error(result.message);
            }

            setSubmitStatus("success");
            setIsSubmitting(false);
            reset(); // Reset the form fields
        } catch (error) {
            console.error("An error occured while submitting the form:", error);
            setIsSubmitting(false);
            setSubmitStatus("error");
        }
    };

    return (
        <div className="mt-6 w-full md:w-3/4">
            <form
                id="newsletter_form"
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col items-start justify-center gap-2 md:flex-row"
            >
                <InputField
                    id="newsletter_email"
                    type="email"
                    placeholder={placeholder}
                    className="w-full"
                    {...register("email", {
                        required: t("required"),
                        minLength: { value: 2, message: t("minLength") },
                        maxLength: { value: 50, message: t("maxLength") },
                        pattern: {
                            value: FORM_REGEX.emailRgx,
                            message: t("email_pattern"),
                        },
                    })}
                    errors={errors}
                />
                <AnimatedButton
                    type="submit"
                    text={cta}
                    delay={1000}
                    wrapperClassName="w-full md:w-auto"
                    buttonClassName="w-full md:w-auto"
                />
            </form>
            <AnimatePresence>
                {
                    submitStatus === "success" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .6 }}
                        >
                            <Alert>
                                <FaRegThumbsUp className="h-4 w-4" />
                                <AlertTitle>{success.title}</AlertTitle>
                                <AlertDescription>
                                    {success.message}
                                </AlertDescription>
                            </Alert>
                        </motion.div>
                    )
                }
                {
                    submitStatus === "error" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .6 }}
                        >
                            <Alert variant="destructive">
                                <MdError className="h-4 w-4" />
                                <AlertTitle>{error.title}</AlertTitle>
                                <AlertDescription>
                                    {error.message}
                                </AlertDescription>
                            </Alert>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
}
