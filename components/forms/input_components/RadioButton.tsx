import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Radio } from "lucide-react";

type RadioButtonProps = {
    value: string;
    label: string;
    id: string;
    className?: string;
} & UseFormRegisterReturn;

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
    ({ onChange, onBlur, name, value, label, id, className }, ref) => (
        <div className="flex items-center space-x-2">
            <input
                ref={ref}
                name={name}
                id={id}
                type="radio"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                aria-label={label}
                className={cn(
                    "form-radio h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800",
                    className
                )}
            />
            <label
                htmlFor={id}
                className="block text-sm font-medium text-primary"
            >
                {label}
            </label>
        </div>
    )
);

RadioButton.displayName = "RadioButton";

export default RadioButton;
