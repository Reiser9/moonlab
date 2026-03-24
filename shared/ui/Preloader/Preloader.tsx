"use client";

import cn from "classnames";
import { HTMLAttributes } from "react";

import "./index.scss";

type Props = {
    theme?: "primary" | "danger";
    small?: boolean;
    fill?: boolean;
    page?: boolean;
    offIndent?: boolean;
    animationDuration?: number;
    wrapperClassName?: string;
    percent?: number | string;
} & HTMLAttributes<HTMLDivElement>;

const Preloader: React.FC<Props> = ({
    theme = "primary",
    small = false,
    fill = false,
    page = false,
    offIndent = false,
    animationDuration = 1,
    className,
    wrapperClassName,
    percent,
    ...props
}) => {
    return (
        <div
            className={cn("preloaderInner", wrapperClassName, {
                ["fill"]: fill,
                ["page"]: page,
                ["indent"]: offIndent,
            })}
            {...props}
        >
            <div
                className={cn("preloader", className, theme, {
                    ["small"]: small,
                })}
                style={{ animationDuration: `${animationDuration}s` }}
            ></div>
            {percent && <span className="percentText">{percent}</span>}
        </div>
    );
};

export default Preloader;
