"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";
import Link from "next/link";

import "./index.scss";

import { File } from "@/shared/ui/File";
import { Upload } from "@/shared/icons";
import { Input } from "@/shared/ui/Input";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import { SettingCheckbox } from "@/shared/ui/Checkbox";

const TokenBattleCreate = () => {
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState<File | null>(null);
    const [imagePreview, setImagePreview] = React.useState<
        string | ArrayBuffer | null
    >("");

    const [duration, setDuration] = React.useState<
        "2m" | "5m" | "15m" | "30m" | "1h"
    >("2m");
    const [players, setPlayers] = React.useState<2 | 4 | 6 | 8>(2);
    const [deposite, setDeposite] = React.useState("");
    const [size, setSize] = React.useState<10 | 50 | 100 | 500>(10);

    const [showPositions, setShowPositions] = React.useState(false);
    const [showPositions2, setShowPositions2] = React.useState(false);

    return (
        <div className="tokenCreateInner">
            <p className="title2">Create token battle</p>

            <div className="tokenCreateTabs">
                <button className="tokenCreateTab active">
                    Create token manually
                </button>

                <Link href="/token-battles/create/random" className="tokenCreateTab">Random token</Link>
            </div>

            <div className="tokenCreateForm">
                <div className="tokenCreateImageInner">
                    <div className="tokenCreateImageContent">
                        <File
                            id="tokenBattleImage"
                            setFile={setImage}
                            setImgPreview={setImagePreview}
                        />

                        <label
                            htmlFor="tokenBattleImage"
                            className="createTokenBattleImageLabel"
                        >
                            <Upload />
                            <span>Upload image</span>
                            {imagePreview && (
                                <span className="createTokenBattleImageLabelImage">
                                    <Image
                                        src={imagePreview.toString()}
                                        alt="Token preview"
                                        fill
                                    />
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="tokenCreateImageWrap">
                        <Input
                            title="Token name"
                            full
                            value={name}
                            setValue={setName}
                            lengthLimit={10}
                        />

                        <button className="outlinedButton tokenCreateImageButton">
                            Randomize everything
                        </button>
                    </div>
                </div>

                <div className="tokenCreatePreview">
                    <div className="tokenCreatePreviewInfo">
                        <UserAvatar
                            image={imagePreview ? imagePreview.toString() : ""}
                            width={37}
                            height={37}
                        />

                        <div className="tokenCreatePreviewInfoInner">
                            <p className="tokenCreatePreviewInfoName">
                                {name || "Your token"}
                            </p>

                            <p className="tokenCreatePreviewInfoText">
                                Battle token - Created by you
                            </p>
                        </div>
                    </div>

                    <div className="tokenCreatePreviewPrice">
                        <p className="tokenCreatePreviewPriceText">
                            Starting price
                        </p>

                        <p className="tokenCreatePreviewPriceValue">100.00$</p>
                    </div>
                </div>

                <div className="tokenCreateItem">
                    <p className="tokenCreateItemTitle">Battle duration</p>

                    <div className="tokenCreateDurations">
                        <button
                            className={cn("tokenCreateDuration", {
                                ["active"]: duration === "2m",
                            })}
                            onClick={() => setDuration("2m")}
                        >
                            <span>2m</span>
                            <span>Quick</span>
                        </button>

                        <button
                            className={cn("tokenCreateDuration", {
                                ["active"]: duration === "5m",
                            })}
                            onClick={() => setDuration("5m")}
                        >
                            <span>5m</span>
                            <span>Short</span>
                        </button>

                        <button
                            className={cn("tokenCreateDuration", {
                                ["active"]: duration === "15m",
                            })}
                            onClick={() => setDuration("15m")}
                        >
                            <span>15m</span>
                            <span>Medium</span>
                        </button>

                        <button
                            className={cn("tokenCreateDuration", {
                                ["active"]: duration === "30m",
                            })}
                            onClick={() => setDuration("30m")}
                        >
                            <span>30m</span>
                            <span>Long</span>
                        </button>

                        <button
                            className={cn("tokenCreateDuration", {
                                ["active"]: duration === "1h",
                            })}
                            onClick={() => setDuration("1h")}
                        >
                            <span>1h</span>
                            <span>Marathon</span>
                        </button>
                    </div>
                </div>

                <div className="tokenCreateItem">
                    <p className="tokenCreateItemTitle">Number of players</p>

                    <div className="tokenCreatePlayers">
                        <button
                            className={cn("tokenCreatePlayer", {
                                ["active"]: players === 2,
                            })}
                            onClick={() => setPlayers(2)}
                        >
                            <span>2</span>
                            <span>1v1</span>
                        </button>

                        <button
                            className={cn("tokenCreatePlayer", {
                                ["active"]: players === 4,
                            })}
                            onClick={() => setPlayers(4)}
                        >
                            <span>4</span>
                            <span>Squad</span>
                        </button>

                        <button
                            className={cn("tokenCreatePlayer", {
                                ["active"]: players === 6,
                            })}
                            onClick={() => setPlayers(6)}
                        >
                            <span>6</span>
                            <span>Team</span>
                        </button>

                        <button
                            className={cn("tokenCreatePlayer", {
                                ["active"]: players === 8,
                            })}
                            onClick={() => setPlayers(8)}
                        >
                            <span>8</span>
                            <span>Arena</span>
                        </button>
                    </div>
                </div>

                <div className="tokenCreateItem">
                    <p className="tokenCreateItemTitle">Entry deposit</p>

                    <div className="tokenCreateItemSizes">
                        <button
                            className={cn("tokenCreateItemSize", {
                                ["active"]: deposite === "10",
                            })}
                            onClick={() => setDeposite("10")}
                        >
                            10$
                        </button>

                        <button
                            className={cn("tokenCreateItemSize", {
                                ["active"]: deposite === "50",
                            })}
                            onClick={() => setDeposite("50")}
                        >
                            50$
                        </button>

                        <button
                            className={cn("tokenCreateItemSize", {
                                ["active"]: deposite === "100",
                            })}
                            onClick={() => setDeposite("100")}
                        >
                            100$
                        </button>

                        <button
                            className={cn("tokenCreateItemSize", {
                                ["active"]: deposite === "500",
                            })}
                            onClick={() => setDeposite("500")}
                        >
                            500$
                        </button>
                    </div>

                    <Input
                        placeholder="Custom amount"
                        full
                        inputMode="decimal"
                        type="number"
                        value={deposite}
                        setValue={setDeposite}
                    />

                    <div className="tokenCreateAmountBlock">
                        <div className="tokenCreateAmountBlockTextBlock">
                            <p className="tokenCreateAmountBlockTitle">
                                Estimated prize pool
                            </p>
                            <p className="tokenCreateAmountBlockText">
                                4 players x 1000$ deposite
                            </p>
                        </div>

                        <p className="tokenCreateAmountBlockValue green">
                            500$
                        </p>
                    </div>
                </div>

                <div className="tokenCreateItem">
                    <p className="tokenCreateItemTitle">Battle settings</p>

                    <div className="tokenCreateItemSettings">
                        <div className="tokenCreateItemSetting">
                            <div className="tokenCreateItemSettingTextBlock">
                                <p className="tokenCreateItemSettingTitle">
                                    Show positions
                                </p>

                                <p className="tokenCreateItemSettingText">
                                    Others see your open positions in real-time
                                </p>
                            </div>

                            <SettingCheckbox
                                id="show_positions"
                                value={showPositions}
                                setValue={setShowPositions}
                            />
                        </div>

                        <div className="tokenCreateItemSetting">
                            <div className="tokenCreateItemSettingTextBlock">
                                <p className="tokenCreateItemSettingTitle">
                                    Show positions
                                </p>

                                <p className="tokenCreateItemSettingText">
                                    Others see your open positions in real-time
                                </p>
                            </div>

                            <SettingCheckbox
                                id="show_positions2"
                                value={showPositions2}
                                setValue={setShowPositions2}
                            />
                        </div>
                    </div>
                </div>

                <div className="tokenCreateItem">
                    <p className="tokenCreateItemTitle">Max position size</p>

                    <div className="tokenCreateItemSizes">
                        <button
                            className={cn("tokenCreateItemSize", {
                                ["active"]: size === 10,
                            })}
                            onClick={() => setSize(10)}
                        >
                            10$
                        </button>

                        <button
                            className={cn("tokenCreateItemSize", {
                                ["active"]: size === 50,
                            })}
                            onClick={() => setSize(50)}
                        >
                            50$
                        </button>

                        <button
                            className={cn("tokenCreateItemSize", {
                                ["active"]: size === 100,
                            })}
                            onClick={() => setSize(100)}
                        >
                            100$
                        </button>

                        <button
                            className={cn("tokenCreateItemSize", {
                                ["active"]: size === 500,
                            })}
                            onClick={() => setSize(500)}
                        >
                            500$
                        </button>
                    </div>
                </div>

                <div className="tokenCreateItem">
                    <p className="tokenCreateItemTitle">Max position size</p>

                    <div className="tokenCreateTotals">
                        <div className="tokenCreateTotal">
                            <p className="tokenCreateTotalText">Token</p>

                            <p className="tokenCreateTotalValue green">4</p>
                        </div>

                        <div className="tokenCreateTotal">
                            <p className="tokenCreateTotalText">Token</p>

                            <p className="tokenCreateTotalValue">5:00</p>
                        </div>

                        <div className="tokenCreateTotal">
                            <p className="tokenCreateTotalText">Prize</p>

                            <p className="tokenCreateTotalValue green">500$</p>
                        </div>
                    </div>
                </div>

                <button className="mainGradientButton tokenCreateButton">
                    Create battle
                </button>
            </div>
        </div>
    );
};

export default TokenBattleCreate;
