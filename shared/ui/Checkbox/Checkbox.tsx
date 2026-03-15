"use client";

import React, { SetStateAction } from "react";
import cn from "classnames";

import "./index.scss";

type Props = {
    id: string;
    label?: string;
    value?: boolean;
    auto?: boolean;
    setValue?: React.Dispatch<SetStateAction<boolean>>;
    onChangeHandler?: () => void;
    wrapperClass?: string;
};

const Checkbox: React.FC<Props> = ({
    id,
    label,
    value,
    auto = false,
    setValue,
    onChangeHandler,
    wrapperClass,
}) => {
    return (
        <div
            className={cn("checkboxInner", wrapperClass, {
                ["auto"]: auto,
            })}
        >
            <input
                type="checkbox"
                className="checkbox"
                id={id}
                checked={value}
                onChange={
                    onChangeHandler
                        ? onChangeHandler
                        : (e) => setValue && setValue(e.target.checked)
                }
            />

            <label htmlFor={id} className="checkboxLabel">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
