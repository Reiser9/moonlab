"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";

import "./index.scss";

import {
    ArrowFall,
    Candles2,
    Clock,
    Coin,
    Delete,
    Dollar,
    Edit,
    Random,
    Reward,
    Swap,
    Time,
    Upload,
    Warn,
} from "@/shared/icons";
import { Input } from "@/shared/ui/Input";
import { File } from "@/shared/ui/File";
import { SliderBlock } from "@/shared/ui/SliderBlock";
import { Profit } from "@/shared/ui/Profit";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import { Modal } from "@/shared/ui/Modal";
import { Checkbox } from "@/shared/ui/Checkbox";

const CreateToken = () => {
    const [image, setImage] = React.useState<File | null>(null);
    const [imagePreview, setImagePreview] = React.useState<
        string | ArrayBuffer | null
    >("");
    const [ticker, setTicker] = React.useState("");

    const [tier, setTier] = React.useState<"public" | "private">("public");
    const [mode, setMode] = React.useState<
        "slow" | "fast" | "flash" | "crack" | "mayhem"
    >("fast");
    const [time, setTime] = React.useState<"4h" | "1h" | "15m" | "3m" | "1m">(
        "1h",
    );

    const [step, setStep] = React.useState(1);

    const [showAdvSettings, setShowAdvSettings] = React.useState(false);
    const [launchedModal, setLaunchedModal] = React.useState(false);

    const [startPrice, setStartPrice] = React.useState<1 | 10 | 100 | 500>(1);

    return (
        <>
            {step === 1 && (
                <>
                    <div className="createInfoBlock">
                        <div className="createInfoBlockBg">
                            <Image src="/img/banner-grid.png" alt="bg" fill />
                        </div>

                        <div className="createInfoBlockContent">
                            <Reward />

                            <div className="createInfoBlockWrapper">
                                <p className="createInfoBlockTitle">
                                    Creator Rewards
                                </p>

                                <p className="createInfoBlockText">
                                    Launch public tokens and earn 0.5% of volume
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="createTokenContent">
                        <div className="createTokenInner">
                            <div className="createTokenImageForm">
                                <div className="createTokenImageWrapper">
                                    <p className="createTokenImageTitle">
                                        Token Image <span>*</span>
                                    </p>

                                    <File
                                        id="tokenImage"
                                        setFile={setImage}
                                        setImgPreview={setImagePreview}
                                    />

                                    <label
                                        htmlFor="tokenImage"
                                        className="createTokenImageLabel"
                                    >
                                        <Upload />
                                        <span>Choose file</span>
                                        {imagePreview && (
                                            <span className="createTokenImageLabelImage">
                                                <Image
                                                    src={imagePreview.toString()}
                                                    alt="Token preview"
                                                    fill
                                                />
                                            </span>
                                        )}
                                    </label>

                                    <p className="createTokenImageText">
                                        Max 5 MB. JPG or PNG recommended
                                    </p>
                                </div>

                                <Input
                                    value={ticker}
                                    setValue={setTicker}
                                    placeholder="Enter token ticker"
                                    title="Ticker"
                                    fieldRequired
                                    lengthLimit={10}
                                    full
                                />
                            </div>

                            <div className="createTokenTiers">
                                <button
                                    className={cn("createTokenTier", {
                                        ["active"]: tier === "public",
                                    })}
                                    onClick={() => setTier("public")}
                                >
                                    <span className="createTokenTierTexts">
                                        <span className="createTokenTierTitle">
                                            Public Tier
                                        </span>
                                        <span className="createTokenTierText">
                                            Earns 0.5% of volume
                                        </span>
                                    </span>

                                    <span className="createTokenTierInfo">
                                        <span className="green">$10.00</span>
                                        219 / 400 Slots
                                    </span>
                                </button>

                                <button
                                    className={cn(
                                        "createTokenTier",
                                        "tierPrivate",
                                        {
                                            ["active"]: tier === "private",
                                        },
                                    )}
                                    onClick={() => setTier("private")}
                                >
                                    <span className="createTokenTierTexts">
                                        <span className="createTokenTierTitle">
                                            Private Tier
                                        </span>
                                        <span className="createTokenTierText">
                                            Only you can see and trade private
                                            tokens
                                        </span>
                                    </span>

                                    <span className="createTokenTierInfo">
                                        Free (3) Unlimited Slots
                                    </span>
                                </button>
                            </div>

                            <div className="createTokenItemWrapper">
                                <p className="title2 createTokenItemTitle">
                                    Mode
                                </p>

                                <div className="createTokenModeItems">
                                    <button
                                        className={cn("createTokenModeItem", {
                                            ["active"]: mode === "slow",
                                        })}
                                        onClick={() => {
                                            setMode("slow");
                                            setTime("4h");
                                        }}
                                    >
                                        <span className="createTokenModeItemDesc low">
                                            LOW RISK
                                        </span>

                                        <span className="createTokenModeItemTitle">
                                            Slow
                                        </span>

                                        <span className="createTokenModeItemText">
                                            4 hours Slower chart for safer play
                                        </span>
                                    </button>

                                    <button
                                        className={cn("createTokenModeItem", {
                                            ["active"]: mode === "fast",
                                        })}
                                        onClick={() => {
                                            setMode("fast");
                                            setTime("1h");
                                        }}
                                    >
                                        <span className="createTokenModeItemDesc recommended">
                                            RECOMMENDED
                                        </span>

                                        <span className="createTokenModeItemTitle">
                                            Fast
                                        </span>

                                        <span className="createTokenModeItemText">
                                            1 hour Faster chart with elevated
                                            risk
                                        </span>
                                    </button>

                                    <button
                                        className={cn("createTokenModeItem", {
                                            ["active"]: mode === "flash",
                                        })}
                                        onClick={() => {
                                            setMode("flash");
                                            setTime("15m");
                                        }}
                                    >
                                        <span className="createTokenModeItemDesc danger">
                                            DANGER
                                        </span>

                                        <span className="createTokenModeItemTitle">
                                            Flash
                                        </span>

                                        <span className="createTokenModeItemText">
                                            15 minutes Much higher risk, but
                                            still sane
                                        </span>
                                    </button>

                                    <button
                                        className={cn("createTokenModeItem", {
                                            ["active"]: mode === "crack",
                                        })}
                                        onClick={() => {
                                            setMode("crack");
                                            setTime("3m");
                                        }}
                                    >
                                        <span className="createTokenModeItemDesc critical">
                                            CRITICAL
                                        </span>

                                        <span className="createTokenModeItemTitle">
                                            Crack
                                        </span>

                                        <span className="createTokenModeItemText">
                                            3 minutes Pure volatility madness
                                        </span>
                                    </button>

                                    <button
                                        className={cn("createTokenModeItem", {
                                            ["active"]: mode === "mayhem",
                                        })}
                                        onClick={() => {
                                            setMode("mayhem");
                                            setTime("1m");
                                        }}
                                    >
                                        <span className="createTokenModeItemDesc wild">
                                            Wild
                                        </span>

                                        <span className="createTokenModeItemTitle">
                                            Mayhem
                                        </span>

                                        <span className="createTokenModeItemText">
                                            1 minute Beyond insanity
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <button
                                className="createTokenSettingsShow"
                                onClick={() =>
                                    setShowAdvSettings((prev) => !prev)
                                }
                            >
                                {showAdvSettings ? "Show" : "Hide"} Advanced
                                Settings
                            </button>

                            {!showAdvSettings && (
                                <>
                                    <div className="createTokenSettingsBox">
                                        <p className="createTokenSettingsTitle">
                                            Instant Buy
                                        </p>

                                        <p className="subtext createTokenSettingsText">
                                            Auto-buy tokens on launch
                                        </p>

                                        <div className="createTokenBuyInputInner">
                                            <p className="createTokenBuyInputPrefix">
                                                $
                                            </p>
                                            <input
                                                type="text"
                                                inputMode="decimal"
                                                className="createTokenBuyInput"
                                                placeholder="Enter amount to buy"
                                            />

                                            <div className="createTokenBuyButtons">
                                                <button className="createTokenBuyButton">
                                                    $10.00
                                                </button>

                                                <button className="createTokenBuyButton">
                                                    $100.00
                                                </button>

                                                <button className="createTokenBuyButton">
                                                    Max
                                                </button>
                                            </div>
                                        </div>

                                        <div className="createTokenSettingsAlert">
                                            <Warn />A position of this size will
                                            automatically open at starting price
                                        </div>
                                    </div>

                                    <div className="createTokenSettingsBox">
                                        <p className="createTokenSettingsTitle">
                                            Starting Price
                                        </p>

                                        <p className="subtext createTokenSettingsText">
                                            You can select a custom starting
                                            price for your token
                                        </p>

                                        <div className="createTokenSettingsPrices">
                                            <button
                                                className={cn(
                                                    "createTokenSettingsPrice",
                                                    {
                                                        ["active"]:
                                                            startPrice === 500,
                                                    },
                                                )}
                                                onClick={() =>
                                                    setStartPrice(500)
                                                }
                                            >
                                                500
                                            </button>

                                            <button
                                                className={cn(
                                                    "createTokenSettingsPrice",
                                                    {
                                                        ["active"]:
                                                            startPrice === 100,
                                                    },
                                                )}
                                                onClick={() =>
                                                    setStartPrice(100)
                                                }
                                            >
                                                100
                                            </button>

                                            <button
                                                className={cn(
                                                    "createTokenSettingsPrice",
                                                    {
                                                        ["active"]:
                                                            startPrice === 10,
                                                    },
                                                )}
                                                onClick={() =>
                                                    setStartPrice(10)
                                                }
                                            >
                                                10
                                            </button>

                                            <button
                                                className={cn(
                                                    "createTokenSettingsPrice",
                                                    {
                                                        ["active"]:
                                                            startPrice === 1,
                                                    },
                                                )}
                                                onClick={() => setStartPrice(1)}
                                            >
                                                1
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="createTokenSidebar">
                            {imagePreview ? (
                                <div className="tokenPreviewBlock">
                                    <div className="tokenPreviewContent">
                                        <div className="tokenPreviewImg">
                                            <Image
                                                src={imagePreview.toString()}
                                                alt="Token preview"
                                                fill
                                            />
                                        </div>

                                        <div className="tokenPreviewInfo">
                                            <p className="tokenPreviewName">
                                                {ticker}
                                            </p>

                                            <div className="tokenPreviewInfoWrapper">
                                                <p className="tokenPreviewPrice">
                                                    289.99
                                                </p>

                                                <p className="tokenPreviewProfit">
                                                    <ArrowFall />
                                                    44.25%
                                                </p>
                                            </div>
                                        </div>

                                        <SliderBlock
                                            progress={12}
                                            text={mode}
                                            time={time}
                                        />
                                    </div>

                                    <div className="tokenPreviewBlockButtons">
                                        <button className="tokenPreviewBlockButton">
                                            <Edit />
                                            Edit
                                        </button>

                                        <button
                                            className="tokenPreviewBlockButton"
                                            onClick={() => {
                                                setImage(null);
                                                setImagePreview(null);
                                            }}
                                        >
                                            <Delete />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="tokenPreviewEmpty">
                                    <p>
                                        This is how your token will appear on
                                        the main page
                                    </p>
                                </div>
                            )}

                            <div className="tokenCreateButtons">
                                <button className="tokenCreateButton">
                                    <span className="tokenCreateButtonIcon">
                                        <Swap />
                                    </span>

                                    <span className="tokenCreateButtonWrapper">
                                        <span className="tokenCreateButtonTitle">
                                            Load Previous
                                        </span>

                                        <span className="tokenCreateButtonText">
                                            Same details as last creation
                                        </span>
                                    </span>
                                </button>

                                <button className="tokenCreateButton">
                                    <span className="tokenCreateButtonIcon">
                                        <Random />
                                    </span>

                                    <span className="tokenCreateButtonWrapper">
                                        <span className="tokenCreateButtonTitle">
                                            Randomize
                                        </span>

                                        <span className="tokenCreateButtonText">
                                            Auto-fill token details
                                        </span>
                                    </span>
                                </button>

                                <button
                                    className="mainGradientButton createTokenButton"
                                    onClick={() => setStep(2)}
                                >
                                    Launch
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="tokenCompleteContent">
                        <div className="tokenCompleteTextInner">
                            <p className="title2 tokenCompleteTitle">
                                Complete payment
                            </p>

                            <p className="subtext tokenCompleteText">
                                Check all token detailis before payment
                            </p>
                        </div>

                        <div className="tokenCompleteWrapper">
                            <div className="tokenCompleteInfo">
                                <p className="tokenCompleteInfoTitle">
                                    Summary
                                </p>

                                <div className="tokenCompleteInfoToken">
                                    <div className="tokenCompleteInfoTokenInfo">
                                        <UserAvatar
                                            image={
                                                imagePreview?.toString() || ""
                                            }
                                            width={46}
                                            height={46}
                                        />

                                        <p className="tokenCompleteInfoTokenName">
                                            {ticker}
                                        </p>
                                    </div>

                                    <button
                                        className="tokenCompleteInfoEdit"
                                        onClick={() => setStep(1)}
                                    >
                                        <Edit />
                                        Edit
                                    </button>
                                </div>

                                <div className="tokenCompleteInfoItems">
                                    <div className="tokenCompleteInfoItem">
                                        <div className="tokenCompleteInfoItemBlock">
                                            <div className="tokenCompleteInfoItemBlockIcon">
                                                <Candles2 />
                                            </div>

                                            <div className="tokenCompleteInfoItemBlockTexts">
                                                <p className="tokenCompleteInfoItemBlockTitle">
                                                    {tier}
                                                </p>

                                                <p className="tokenCompleteInfoItemBlockText">
                                                    Token tier
                                                </p>
                                            </div>
                                        </div>

                                        <div className="tokenCompleteInfoItemSlots">
                                            <div className="tokenCompleteInfoItemSlotsPrice">
                                                <Coin />
                                                10.00$
                                            </div>

                                            <p className="tokenCompleteInfoItemSlotsValue">
                                                294 / 400 Slots
                                            </p>
                                        </div>
                                    </div>

                                    <div className="tokenCompleteInfoItem">
                                        <div className="tokenCompleteInfoItemBlock">
                                            <div className="tokenCompleteInfoItemBlockIcon">
                                                <Clock />
                                            </div>

                                            <div className="tokenCompleteInfoItemBlockTexts">
                                                <p className="tokenCompleteInfoItemBlockTitle">
                                                    {mode} <span>{time}</span>
                                                </p>

                                                <p className="tokenCompleteInfoItemBlockText">
                                                    Chart mode
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tokenCompleteInfoItem">
                                        <div className="tokenCompleteInfoItemBlock">
                                            <div className="tokenCompleteInfoItemBlockIcon">
                                                <Dollar />
                                            </div>

                                            <div className="tokenCompleteInfoItemBlockTexts">
                                                <p className="tokenCompleteInfoItemBlockTitle">
                                                    {startPrice}
                                                </p>

                                                <p className="tokenCompleteInfoItemBlockText">
                                                    Starting price
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tokenCompleteBalanceWrapper">
                                <div className="tokenCompleteBalanceInfo">
                                    <div className="tokenCompleteBalanceInfoWrap">
                                        <p className="tokenCompleteBalanceInfoTitle">
                                            Earn creator points
                                        </p>

                                        <Profit positive value={100} />
                                    </div>

                                    <p className="subtext">
                                        Get points for each token you launch
                                    </p>
                                </div>

                                <div className="tokenCompleteBalance">
                                    <p className="tokenCompleteInfoTitle">
                                        Fee
                                    </p>

                                    <div className="tokenCompleteBalanceBlock">
                                        <div className="tokenCompleteBalanceWrap">
                                            <Coin />

                                            <div className="tokenCompleteBalanceTexts">
                                                <p className="tokenCompleteBalanceValue">
                                                    0$
                                                </p>

                                                <p className="tokenCompleteBalanceText">
                                                    Your balance
                                                </p>
                                            </div>
                                        </div>

                                        <button className="tokenCompleteBalanceButton">
                                            Top +
                                        </button>
                                    </div>

                                    <div className="tokenCompleteBalanceTotal">
                                        <div className="tokenCompleteBalanceTotalItem">
                                            <p className="tokenCompleteBalanceTotalItemTitle">
                                                Token tier
                                            </p>

                                            <p className="tokenCompleteBalanceTotalItemValue">
                                                10.00$
                                            </p>
                                        </div>

                                        <div className="tokenCompleteBalanceTotalItem">
                                            <p className="tokenCompleteBalanceTotalItemTitle bold">
                                                Total
                                            </p>

                                            <p className="tokenCompleteBalanceTotalItemValue">
                                                10.00$
                                            </p>
                                        </div>

                                        <div className="tokenCompleteBalanceTotalInfo">
                                            <Warn />
                                            Not enough balance to launch. Please
                                            top up
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tokenCompleteButtons">
                            <button
                                className="tokenCompleteButton outline"
                                onClick={() => setStep(1)}
                            >
                                Back
                            </button>

                            <button className="mainGradientButton tokenCompleteButton" onClick={() => setLaunchedModal(true)}>
                                Launch token
                            </button>
                        </div>
                    </div>

                    <Modal value={launchedModal} setValue={setLaunchedModal}>
                        <div className="launchedModalTexts">
                            <p className="launchedModalTitle">
                                Token launched
                            </p>

                            <p className="launchedModalText">
                                Your token is already live
                            </p>
                        </div>

                        <div className="launchedModalContent">
                            <div className="tokenCompleteInfoItem">
                                <div className="tokenCompleteInfoItemBlock">
                                    <div className="launchedModalInfoIcon">
                                        <Time />
                                    </div>

                                    <div className="tokenCompleteInfoItemBlockTexts">
                                        <p className="tokenCompleteInfoItemBlockTitle">
                                            Fast 1 hour
                                        </p>

                                        <p className="tokenCompleteInfoItemBlockText">
                                            Chart mode
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="tokenCompleteInfoItem">
                                <div className="tokenCompleteInfoItemBlock">
                                    <div className="launchedModalInfoIcon">
                                        <Dollar />
                                    </div>

                                    <div className="tokenCompleteInfoItemBlockTexts">
                                        <p className="tokenCompleteInfoItemBlockTitle">
                                            10
                                        </p>

                                        <p className="tokenCompleteInfoItemBlockText">
                                            Starting price
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tokenCompleteInfoItem">
                                <div className="tokenCompleteInfoItemBlock">
                                    <div className="launchedModalInfoIcon">
                                        <Candles2 />
                                    </div>

                                    <div className="tokenCompleteInfoItemBlockTexts">
                                        <p className="tokenCompleteInfoItemBlockTitle">
                                            Public
                                        </p>

                                        <p className="tokenCompleteInfoItemBlockText">
                                            Token tier
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="tokenCompleteInfoItem">
                                <div className="launchedModalTokenInfo">
                                    <UserAvatar image="/img/token1.png" width={23} height={23} />

                                    <p className="launchedModalTokenInfoName">QUASA</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tokenCompleteTotal">
                            <div className="tokenCompleteTotalItem">
                                <p className="tokenCompleteTotalItemTitle">
                                    Tier
                                </p>

                                <p className="tokenCompleteTotalItemText">
                                    Free
                                </p>
                            </div>

                            <div className="tokenCompleteTotalItem">
                                <p className="tokenCompleteTotalItemTitle">
                                    Tier
                                </p>

                                <p className="tokenCompleteTotalItemText">
                                    Free
                                </p>
                            </div>
                        </div>

                        <Checkbox id="laucnhedShow" auto label="Dont’t show this again" wrapperClass="launchedModalCheckbox" />

                        <button className="mainGradientButton launchedModalClose" onClick={() => setLaunchedModal(false)}>
                            Close
                        </button>
                    </Modal>
                </>
            )}
        </>
    );
};

export default CreateToken;
