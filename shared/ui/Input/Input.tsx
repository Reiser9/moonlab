"use client";

import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import cn from "classnames";

import "./index.scss";

type Props = {
    value?: string;
    setValue?: React.Dispatch<React.SetStateAction<string>>;
    title?: string;
    icon?: React.ReactNode;
    placeholder?: string;
    type?: "text" | "password" | "number";
    error?: boolean;
    errorMessage?: string;
    full?: boolean;
    disabled?: boolean;
    lengthLimit?: number;
    className?: string;
    wrapperClass?: string;
    component?: "input" | "textarea";
    fieldRequired?: boolean;
    titleClass?: string;
    onInputChange?: (value: string) => void;
} & (
    | InputHTMLAttributes<HTMLInputElement>
    | InputHTMLAttributes<HTMLTextAreaElement>
);

const Input: React.FC<Props> = ({
    value,
    setValue,
    title,
    icon,
    placeholder,
    type = "text",
    error = false,
    errorMessage,
    full = false,
    disabled = false,
    component = "input",
    lengthLimit,
    className,
    wrapperClass,
    titleClass,
    fieldRequired = false,
    onInputChange,
    ...props
}) => {
    return (
        <div
            className={cn("inputInner", wrapperClass, {
                ["full"]: full,
            })}
        >
            {title && (
                <p className={cn("inputTitle", titleClass)}>
                    {title}
                    {fieldRequired && <span>*</span>}
                </p>
            )}

            <div
                className={cn("inputWrapper", className, {
                    ["disabled"]: disabled,
                })}
            >
                {icon && icon}

                {lengthLimit && (
                    <p className="inputLength">
                        {value?.length || 0}/{lengthLimit}
                    </p>
                )}

                {component === "input" ? (
                    <input
                        type={type}
                        className={cn("input", {
                            ["withIcon"]: !!icon,
                            ["lengthLimitInput"]: !!lengthLimit,
                        })}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => {
                            if (disabled) return;

                            const value = e.target.value;

                            if (!!lengthLimit && value.length > lengthLimit)
                                return;

                            if (onInputChange) {
                                onInputChange(value);
                            }

                            if (setValue) {
                                setValue(value);
                            }
                        }}
                        {...(props as TextareaHTMLAttributes<HTMLInputElement>)}
                    />
                ) : (
                    <textarea
                        className={cn("input", "textarea", {
                            ["withIcon"]: !!icon,
                        })}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => {
                            if (disabled) return;
                            onInputChange
                                ? onInputChange(e.target.value)
                                : setValue && setValue(e.target.value);
                        }}
                        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                )}
            </div>

            {error && errorMessage && (
                <p className="inputMessage">{errorMessage}</p>
            )}
        </div>
    );
};

export default Input;
