import React from "react";
import Link from "next/link";
import Image from "next/image";

import "../index.scss";
import "../../index.scss";

import { AvatarGroup } from "@/shared/ui/AvatarGroup";
import { Info2 } from "@/shared/icons";
import { Select } from "@/shared/ui/Select";
import { Input } from "@/shared/ui/Input";

const CreateRandomBattle = () => {
    return (
        <>
            <p className="title2">Token Setup</p>

            <div className="tokenCreateRandomType">
                <Select
                    title="Type token"
                    placeholder="Solana"
                    options={[
                        {
                            label: "test",
                            value: "test",
                        },
                        {
                            label: "test2",
                            value: "test2",
                        },
                    ]}
                />
            </div>

            <div className="tokenCreateTabs random">
                <Link href="/token-battles/create" className="tokenCreateTab">
                    Create token manually
                </Link>

                <button className="tokenCreateTab active">Random token</button>
            </div>

            <div className="tokenCreateRandomContent">
                <div className="tokenCreateRandomImage"></div>

                <div className="tokenCreateRandomWrap">
                    <p className="tokenCreateRandomTitle">
                        Token will be generated automatically
                    </p>

                    <div className="tokenCreateRandomWrapForm">
                        <div className="tokenCreateRandomWrapFormItem">
                            <Input placeholder="Token name" full />
                        </div>
                        
                        <div className="tokenCreateRandomWrapFormItem">
                            <Input placeholder="Ticker" full />
                        </div>

                        <div className="tokenCreateRandomWrapFormItem">
                            <Input placeholder="Description" full />
                        </div>

                        <div className="tokenCreateRandomWrapFormItem">
                            <Input placeholder="Starting price" full />
                        </div>

                        <button className="mainGradientButton tokenCreateRandomWrapFormItemButton">
                            Random token
                        </button>
                    </div>
                </div>
            </div>

            <p className="title2">Battle Settings</p>

            <div className="tokenCreateRandomForm">
                <div className="tokenCreateRandomFormItem">
                    <Input
                        placeholder="Fixed"
                        title="Deposit per participant"
                        full
                    />
                </div>

                <div className="tokenCreateRandomFormItem">
                    <Input title="Number of participants" full />
                </div>

                <div className="tokenCreateRandomFormItem">
                    <Input title="Battle duration" full />
                </div>

                <div className="tokenCreateRandomFormItem">
                    <Select
                        title="Type of battle"
                        options={[
                            {
                                label: "test",
                                value: "test",
                            },
                            {
                                label: "test2",
                                value: "test2",
                            },
                        ]}
                    />
                </div>

                <button className="mainGradientButton tokenCreateRandomFormButton">
                    Save changes
                </button>
            </div>

            <div className="tokenBattleActive">
                <p className="title2">Summary</p>

                <div className="tokenBattleActiveItems">
                    <div className="tokenBattleActiveItem">
                        <p className="tokenBattleActiveItemStatus">Live</p>

                        <div className="tokenBattleActiveItemInfo">
                            <div className="tokenBattleActiveItemInfoImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <p className="tokenBattleActiveItemInfoName">
                                PEPE
                            </p>

                            <p className="tokenBattleActiveItemInfoPrize">
                                5 000$
                            </p>
                        </div>

                        <div className="tokenBattleActiveItemCountdown">
                            <p className="tokenBattleActiveItemCountdownTitle">
                                Countdown
                            </p>

                            <div className="tokenBattleActiveItemCountdownContent">
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        hours
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        minutes
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        seconds
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tokenBattleActiveItemParams">
                            <div className="tokenBattleActiveItemPlayers">
                                <p className="tokenBattleActiveItemParamName">
                                    4/6 Players
                                </p>

                                <AvatarGroup
                                    users={[
                                        {
                                            name: "Noa",
                                        },
                                        {
                                            image: "/img/token1.png",
                                            name: "Tom",
                                        },
                                        {
                                            image: "/img/token2.png",
                                            name: "Pepe",
                                        },
                                        {
                                            image: "/img/token3.png",
                                            name: "Andrew",
                                        },
                                    ]}
                                />
                            </div>

                            <div className="tokenBattleActiveItemPrice">
                                <p className="tokenBattleActiveItemParamName">
                                    Entry
                                </p>

                                <p className="tokenBattleActiveItemPriceValue">
                                    100.00$
                                </p>
                            </div>
                        </div>

                        <button className="mainGradientButton tokenBattleActiveItemButton">
                            Create battle
                        </button>
                    </div>

                    <div className="tokenBattleActiveInfoBlock">
                        <div className="tokenBattleActiveInfo">
                            <Info2 />

                            <div className="tokenBattleActiveInfoText">
                                <p>All participants trade the same token.</p>

                                <p>Losers lose their full deposit.</p>

                                <p>Winner takes the entire prize pool.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateRandomBattle;
