import React from "react";
import Image from "next/image";
import cn from "classnames";

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
                    <div
                        className={cn("prizesBlock", {
                            ["big"]: id + 1 === 1,
                        })}
                        key={id}
                    >
                        <p className="prizesBlockPlace">{id + 1}</p>

                        <div className="prizesBlockImgInner">
                            <div className="prizesBlockImg">
                                <Image
                                    src={image}
                                    alt={`Avatar ${name}`}
                                    fill
                                />
                            </div>
                        </div>

                        <div className="prizesBlockInfo">
                            <p className="prizesBlockName">{name}</p>
                            <p className="prizesBlockProfit">{value}</p>
                            <p className="prizesBlockOpened">{text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PrizesBlock;
