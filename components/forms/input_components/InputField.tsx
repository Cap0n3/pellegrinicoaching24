import React from "react";
import { UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

type IFormValues = {
    [key: string]: any;
};

type InputFieldProps = {
    id: string;
    type: "text" | "email" | "tel";
    label: string;
    placeholder: string;
    errors: { [key: string]: any };
    className?: string;
} & ReturnType<UseFormRegister<IFormValues>>;

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    (props, ref) => {
        const {
            id,
            type,
            name,
            label,
            placeholder,
            errors,
            className,
            onChange,
            onBlur,
        } = props;

        return (
            <div className="mb-5 w-full">
                {label && (
                    <label
                        htmlFor={id}
                        className="mb-2 block text-sm font-medium text-primary"
                    >
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    id={id}
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    placeholder={placeholder}
                    aria-label={label}
                    aria-invalid={errors[name] ? "true" : "false"}
                />
                {errors[name] && (
                    <span
                        role="alert"
                        className="text-sm text-red-500 dark:text-red-400"
                    >
                        {errors[name].message}
                    </span>
                )}
            </div>
        );
    }
);

export default InputField;
