import React from "react";
import { UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

type IFormValues = {
    [key: string]: any;
};

type TextAreaFieldProps = {
    id: string;
    name: string;
    label?: string;
    placeholder?: string;
    rows?: number;
    errors: { [key: string]: any };
    className?: string;
} & ReturnType<UseFormRegister<IFormValues>>;

const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
    (props, ref) => {
        const {
            id,
            name,
            label,
            placeholder,
            rows = 5,
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
                <textarea
                    id={id}
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={cn(
                        "flex min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    placeholder={placeholder}
                    rows={rows}
                    aria-label={label}
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

// const TextAreaField = React.forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
//     ({ id, name, label, placeholder, rows = 5, errors, className }, ref) => (
//         <>
//             {label && (
//                 <label
//                     htmlFor={id}
//                     className="mb-2 block text-sm font-medium text-primary"
//                 >
//                     {label}
//                 </label>
//             )}
//             <textarea
//                 id={id}
//                 name={name}
//                 ref={ref}
//                 className={cn(
//                     "mb-5 flex min-h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255)]",
//                     className
//                 )}
//                 placeholder={placeholder}
//                 rows={rows}
//                 aria-label={label}
//             />

//             {errors[name] && (
//                 <span
//                     role="alert"
//                     className="text-sm text-red-500 dark:text-red-400"
//                 >
//                     {errors[name].message}
//                 </span>
//             )}
//         </>
//     )
// );

export default TextAreaField;
