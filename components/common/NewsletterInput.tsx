"use client";

import { useState, useCallback } from "react";
import { useRef } from "react";
import { useForm, SubmitHandler, set } from "react-hook-form";
import InputField from "@/components/forms/input_components/InputField";
import { useTranslations } from "next-intl";
import { FORM_REGEX } from "@/components/forms/formRegex";
import AnimatedButton from "@/components/common/AnimatedButton";

const NEWSLETTER_API_ENDPOINT = "/api/newsletter";

type NewsletterInputProps = {
    placeholder: string;
    cta: string;
};

interface IFormInput {
    email: string;
}

export default function NewsletterInput({
    cta,
    placeholder,
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
            console.log(result);

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
        </div>
    );
}
