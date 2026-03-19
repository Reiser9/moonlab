"use client";

import React from "react";
import ReactDOM from "react-dom";
import cn from "classnames";

import "./index.scss";

import { Close } from "@/shared/icons";

type Props = {
    value: boolean;
    setValue: (value: boolean) => void;
    size?: "default" | "small" | "big";
    onClose?: () => void;
    children: React.ReactNode;
};

const Modal: React.FC<Props> = ({
    value,
    setValue,
    size = "default",
    onClose = () => {},
    children,
}) => {
    const closeModal = () => {
        setValue(false);
        onClose();
    };

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeModal();
            }
        };

        if (value) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [value]);

    if (!value) {
        return;
    }

    return ReactDOM.createPortal(
        <div className="modalOverlay" onClick={closeModal}>
            <div className={cn("modalWrapper", size)}>
                <div
                    className="modalContent"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="modalCrossButton" onClick={closeModal}>
                        <Close />
                    </button>

                    <div className="modalText">{children}</div>
                </div>
            </div>
        </div>,
        document.body,
    );
};

export default Modal;
