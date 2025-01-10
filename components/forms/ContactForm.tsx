// For turnstile integration see: https://medium.com/@jedpatterson/adding-cloudflare-turnstile-to-a-next-js-app-78121bf4d7e3

"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useWindowSize from "@/hooks/useWindowSize";
import InputField from "@/components/forms/input_components/InputField";
import TextAreaField from "@/components/forms/input_components/TextAreaField";
import SelectField from "./input_components/SelectInput";
import RadioButton from "./input_components/RadioButton";
import Alert from "../common/Alert";
import { FORM_REGEX } from "@/components/forms/formRegex";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Turnstile, { useTurnstile } from "react-turnstile";
import { verifyToken } from "@/utils/turnstileVerification";
import { useTheme } from "next-themes";

const EMAIL_API_ENDPOINT = "/api/email";

interface IFormInput {
    subject: string;
    option: string;
    fname: string;
    lname: string;
    phone?: string;
    email: string;
    message: string;
    recaptcha: string;
}

export default function ContactForm(): JSX.Element {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IFormInput>({
        defaultValues: {
            subject: "Question",
            option: "Pas de préférence",
        },
    });
    const t = useTranslations("Forms.contact");
    const { theme } = useTheme();
    const turnstile = useTurnstile();
    const { innerWidth } = useWindowSize();
    const [token, setToken] = useState<string | null>(null);
    const [isTokenReady, setIsTokenReady] = useState<boolean | null>(null);
    const [tokenError, setTokenError] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");
    const [isCaptchaVerified, setIsCaptchaVerified] = useState<boolean | null>(
        null
    );
    const [isUnsupported, setIsUnsupported] = useState(false);

    /**
     * Fully reset the form state
     */
    const handleReset = useCallback(() => {
        turnstile.reset();
        setToken(null);
        setIsTokenReady(null);
        setIsCaptchaVerified(null);
        setIsSubmitting(false);
        setSubmitStatus("idle");
    }, [turnstile]);

    /**
     * Form submission handler from react-hook-form
     */
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        // Reset the form state
        handleReset();

        // First, check if the captcha token is missing
        if (!token) {
            setIsTokenReady(false);
            return;
        }

        // Display the submitting message
        setIsSubmitting(true);

        try {
            // Verify the captcha token with Cloudflare
            const verificationResult = await verifyToken(token);
            if (!verificationResult.success) {
                () => turnstile.reset();
                setIsSubmitting(false);
                setIsCaptchaVerified(false);
                console.error(
                    "Captcha verification failed:",
                    verificationResult
                );
                return;
            }

            setIsCaptchaVerified(true);

            // Submit form data
            const response = await fetch(EMAIL_API_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                () => turnstile.reset();
                setIsSubmitting(false);
                setSubmitStatus("error");
                console.error(
                    "An error occured while submitting the form:",
                    response
                );
                return;
            }

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

    // Reset the form state after 5 seconds if the submission was successful
    useEffect(() => {
        if (submitStatus === "success") {
            const timer = setTimeout(() => {
                handleReset();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [submitStatus, handleReset]);

    return (
        <div className="flex w-full flex-col items-center justify-center bg-transparent">
            <form
                id="contact_form"
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col items-start justify-center"
            >
                <SelectField
                    id="contact_subject"
                    label={t("subject")}
                    options={[
                        { value: "Question", label: "Question" },
                        { value: "Rendez-vous", label: "Rendez-vous" },
                        { value: "Autre", label: "Autre" },
                    ]}
                    {...register("subject")}
                />
                <fieldset className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-start">
                    <legend className="mb-3 block text-sm font-medium text-primary">
                        {t("modality")}
                    </legend>
                    <RadioButton
                        id="contact_option1"
                        label={t("option1")}
                        value="Pas de préférence"
                        {...register("option")}
                    />
                    <RadioButton
                        id="contact_option2"
                        label={t("option2")}
                        value="vidéo conférence"
                        {...register("option")}
                    />
                    <RadioButton
                        id="contact_option3"
                        label={t("option3")}
                        value="En personne"
                        {...register("option")}
                    />
                </fieldset>
                <InputField
                    id="contact_fname"
                    type="text"
                    label={t("fname") + " *"}
                    placeholder={t("fname")}
                    {...register("fname", {
                        required: t("required"),
                        minLength: { value: 2, message: t("minLength") },
                        maxLength: { value: 50, message: t("maxLength") },
                        pattern: {
                            value: FORM_REGEX.nameRgx,
                            message: t("fname_pattern"),
                        },
                    })}
                    errors={errors}
                />
                <InputField
                    id="contact_lname"
                    type="text"
                    label={t("lname") + " *"}
                    placeholder={t("lname")}
                    {...register("lname", {
                        required: t("required"),
                        minLength: { value: 2, message: t("minLength") },
                        maxLength: { value: 50, message: t("maxLength") },
                        pattern: {
                            value: FORM_REGEX.nameRgx,
                            message: t("lname_pattern"),
                        },
                    })}
                    errors={errors}
                />
                <InputField
                    id="contact_phone"
                    type="tel"
                    label={t("phone")}
                    placeholder={t("phone")}
                    {...register("phone", {
                        minLength: { value: 2, message: t("minLength") },
                        maxLength: { value: 50, message: t("maxLength") },
                        pattern: {
                            value: FORM_REGEX.phoneRgx,
                            message: t("phone_pattern"),
                        },
                    })}
                    errors={errors}
                />
                <InputField
                    id="contact_email"
                    type="text"
                    label={t("email") + " *"}
                    placeholder={t("email")}
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
                <TextAreaField
                    id="contact_message"
                    label={t("message") + " *"}
                    placeholder={t("message")}
                    {...register("message", {
                        required: t("required"),
                        minLength: { value: 2, message: t("minLength") },
                        maxLength: { value: 50, message: t("maxLength") },
                        pattern: {
                            value: FORM_REGEX.messageRgx,
                            message: t("message_pattern"),
                        },
                    })}
                    errors={errors}
                />
                <Button type="submit" className="mb-10 w-full">
                    {t("submit")}
                </Button>
                <Turnstile
                    className="flex w-full items-center justify-center"
                    size={innerWidth < 400 ? "compact" : "normal"}
                    theme={theme === "dark" ? "dark" : "light"}
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_PUBLIC_KEY!}
                    onVerify={(turnstileToken) => {
                        setToken(turnstileToken);
                        setIsTokenReady(true);
                        setTokenError(false);
                    }}
                    onUnsupported={() => {
                        setIsUnsupported(true);
                        alert(t("unsupported"));
                    }}
                    onError={(error) => {
                        console.error(
                            "An error occured while verifying the captcha:",
                            error
                        );
                        setTokenError(true);
                    }}
                />
                {isSubmitting && (
                    <Alert
                        type="info"
                        message={t("submitting")}
                        className="mt-4"
                    />
                )}
                {submitStatus === "success" && (
                    <Alert
                        type="success"
                        message={t("success")}
                        className="mt-4"
                    />
                )}
                {isTokenReady === false && (
                    <Alert
                        type="warning"
                        message={t("captcha")}
                        className="mt-4"
                    />
                )}
                {submitStatus === "error" && (
                    <Alert
                        type="danger"
                        message={t("error")}
                        className="mt-4"
                    />
                )}
                {isCaptchaVerified === false && (
                    <Alert
                        type="danger"
                        message={t("captcha_error")}
                        className="mt-4"
                    />
                )}
                {isUnsupported && (
                    <Alert
                        type="danger"
                        message={t("unsupported")}
                        className="mt-4"
                    />
                )}
                {tokenError && (
                    <Alert
                        type="danger"
                        message={t("token_error")}
                        className="mt-4"
                    />
                )}
            </form>
        </div>
    );
}
