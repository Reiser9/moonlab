"use client";

import React from "react";
import cn from "classnames";

import "./index.scss";

import { ArrowDown } from "@/shared/icons";

type Props = {
    options: {
        text: string;
    }[];
    className?: string;
};

const CustomSelect: React.FC<Props> = ({ options, className }) => {
    const [sortByFilterShow, setSortByFilterShow] = React.useState(false);
    const [sortByFilter, setSortByFilter] = React.useState(options[0].text);

    const selectRef = React.useRef<HTMLDivElement>(null);

    const changeSelect = (option: string) => {
        if (sortByFilter === option) return;

        setSortByFilter(option);
        setSortByFilterShow(false);
    };

    React.useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(e.target as Node)
            ) {
                setSortByFilterShow(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div className={cn("filterSelectInner", className)} ref={selectRef}>
            <button
                className={cn("filterSelect", {
                    ["active"]: sortByFilterShow,
                })}
                onClick={() => setSortByFilterShow((prev) => !prev)}
            >
                <span className="filterSelectTitle">Sort by:</span>

                <span className="filterSelectValue">{sortByFilter}</span>

                <ArrowDown />
            </button>

            <div
                className={cn("selectDropdown", {
                    ["active"]: sortByFilterShow,
                })}
            >
                {options.map((data, id) => (
                    <button
                        key={id}
                        className={cn("selectDropdownOption", {
                            ["active"]: sortByFilter === data.text,
                        })}
                        onClick={() => changeSelect(data.text)}
                    >
                        {data.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CustomSelect;
