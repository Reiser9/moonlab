import React from "react";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";

import "./index.scss";

type Props = {
    data: {
        image: string;
        name: string;
        value: string;
        text: string;
    }[];
};

const PrizesBlock: React.FC<Props> = ({ data }) => {
    return (
        <div className="prizesBlocks">
            {data.map((data, id) => {
                const { image, name, text, value } = data || {};

                return (
                    <Link
                        href="/profile"
                        className={cn("prizesBlock", {
                            ["big"]: id + 1 === 1,
                        })}
                        key={id}
                    >
                        <span className="prizesBlockPlace">{id + 1}</span>

                        <span className="prizesBlockImgInner">
                            <span className="prizesBlockImg">
                                <Image
                                    src={image}
                                    alt={`Avatar ${name}`}
                                    fill
                                />
                            </span>
                        </span>

                        <span className="prizesBlockInfo">
                            <span className="prizesBlockName">{name}</span>
                            <span className="prizesBlockProfit">{value}</span>
                            <span className="prizesBlockOpened">{text}</span>
                        </span>
                    </Link>
                );
            })}
        </div>
    );
};

export default PrizesBlock;
