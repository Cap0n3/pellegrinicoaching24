import React from "react";
import {
    Info,
    AlertCircle,
    CheckCircle,
    AlertTriangle,
    Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

type AlertType = "info" | "danger" | "success" | "warning" | "dark";

interface AlertProps {
    type: AlertType;
    message: string;
    className?: string;
}

export default function Alert({ type, message, className }: AlertProps) {
    const iconMap: Record<AlertType, JSX.Element> = {
        info: <Info className="mr-3 inline h-4 w-4 flex-shrink-0" />,
        danger: <AlertCircle className="mr-3 inline h-4 w-4 flex-shrink-0" />,
        success: <CheckCircle className="mr-3 inline h-4 w-4 flex-shrink-0" />,
        warning: (
            <AlertTriangle className="mr-3 inline h-4 w-4 flex-shrink-0" />
        ),
        dark: <Bell className="mr-3 inline h-4 w-4 flex-shrink-0" />,
    };

    const colorMap: Record<AlertType, string> = {
        info: "text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
        danger: "text-red-800 bg-red-50 dark:bg-gray-800 dark:text-red-400",
        success:
            "text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400",
        warning:
            "text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
        dark: "text-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-300",
    };

    return (
        <div
            className={cn(
                `mb-4 flex w-full items-center rounded-lg p-4 text-sm ${colorMap[type]}`,
                className
            )}
            role="alert"
        >
            <span>{iconMap[type]}</span>
            <span>{message}</span>
        </div>
    );
}
