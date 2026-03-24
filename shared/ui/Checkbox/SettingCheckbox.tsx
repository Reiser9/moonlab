"use client";

import React, { SetStateAction } from "react";
import cn from "classnames";

import "./index.scss";

type Props = {
    id: string;
    value?: boolean;
    setValue?: React.Dispatch<SetStateAction<boolean>>;
    onChangeHandler?: () => void;
    wrapperClass?: string;
};

const SettingCheckbox: React.FC<Props> = ({
    id,
    value,
    setValue,
    onChangeHandler,
    wrapperClass,
}) => {
    return (
        <div
            className={cn("settingCheckboxInner", wrapperClass)}
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

            <label htmlFor={id} className="checkboxSettingLabel"></label>
        </div>
    );
};

export default SettingCheckbox;
