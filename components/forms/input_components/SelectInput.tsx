import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/lib/utils";

type SelectProps = {
    id: string;
    name: string;
    label: string;
    options: { value: string; label: string }[];
    className?: string;
} & UseFormRegisterReturn;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ onChange, onBlur, id, name, label, options, className }, ref) => (
        <>
            {label && (
                <label
                    htmlFor={id}
                    className="mb-2 block text-sm font-medium text-primary"
                >
                    {label}
                </label>
            )}
            <select
                id={id}
                name={name}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                className={cn(
                    "mb-5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                aria-label={label}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </>
    )
);

export default Select;
