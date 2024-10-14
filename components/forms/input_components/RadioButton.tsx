import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Radio } from "lucide-react";

type RadioButtonProps = {
    value: string;
    label: string;
    id: string;
} & UseFormRegisterReturn;

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
    ({ onChange, onBlur, name, value, label, id }, ref) => (
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
                className="form-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
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
