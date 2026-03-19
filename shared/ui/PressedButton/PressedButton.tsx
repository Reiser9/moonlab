import React, { SetStateAction } from "react";
import cn from "classnames";

import "./index.scss";
import { CheckCircle } from "@/shared/icons";

type Props = {
    value: boolean;
    setValue: React.Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
};

const PressedButton: React.FC<Props> = ({ value, setValue, children }) => {
    return (
        <button
            className={cn("pressedButton", {
                ["active"]: value,
            })}
            onClick={() => setValue((prev) => !prev)}
        >
            <span>
                <CheckCircle />
            </span>
            {children}
        </button>
    );
};

export default PressedButton;
