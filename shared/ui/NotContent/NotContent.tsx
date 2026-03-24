"use client";

import React, { HTMLAttributes } from "react";
import cn from "classnames";

import "./index.scss";

import { Close } from "@/shared/icons";

type Props = {
    text?: string;
    icon?: React.ReactNode;
    danger?: boolean;
    small?: boolean;
    children?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const NotContent: React.FC<Props> = ({
    text,
    icon,
    danger = false,
    small = true,
    children,
    ...props
}) => {
    return (
        <div
            className={cn("emptyContent", {
                ["danger"]: danger,
            })}
            {...props}
        >
            <div
                className={cn("emptyImgInner", {
                    ["small"]: small,
                })}
            >
                {icon ? icon : <Close />}
            </div>

            {text && <p className="emptyContentText">{text}</p>}

            {children}
        </div>
    );
};

export default NotContent;
