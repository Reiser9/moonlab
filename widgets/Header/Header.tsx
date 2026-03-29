"use client";

import React from "react";
import Link from "next/link";
import cn from "classnames";

import "./index.scss";

import {
    ArrowDown,
    ArrowLeft,
    Chat2,
    Coin,
    CoinBase,
    Copy,
    Dots,
    Eth,
    Google,
    Logo,
    Logout,
    Mail,
    Mail2,
    Menu,
    Metamask,
    Solana3,
    Solare,
    Stars,
    Transfer,
    UserLogin,
    Wallet2,
    WalletConnect,
    Warn,
} from "@/shared/icons";
import { LiveTradeItem } from "@/shared/ui/TradeItem";
import { useSidebarContext } from "@/shared/context/SidebarProvider";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import { Modal } from "@/shared/ui/Modal";
import { Select } from "@/shared/ui/Select";
import { Input } from "@/shared/ui/Input";

const Header = () => {
    const [userModal, setUserModal] = React.useState(false);
    const [walletModal, setWalletModal] = React.useState(false);

    const [depositeStep, setDepositeStep] = React.useState(1);

    const {
        setSidebarIsOpen,
        setChatIsOpen,
        depositeModal,
        setDepositeModal,
        withdrawModal,
        setWithdrawModal,
        connectSolModal,
        setConnectSolModal,
        loginModal,
        setLoginModal
    } = useSidebarContext();

    const walletRef = React.useRef<HTMLDivElement>(null);
    const userRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                walletRef.current &&
                !walletRef.current.contains(e.target as Node)
            ) {
                setWalletModal(false);
            }

            if (
                userRef.current &&
                !userRef.current.contains(e.target as Node)
            ) {
                setUserModal(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <header className="header">
                <div className="headerInfo">
                    <p className="liveTrades">
                        <span></span>
                        Live Trades
                    </p>

                    <Link href="/" className="headerMobileLogo">
                        <Logo />
                    </Link>
                </div>

                <div className="headerTrades">
                    <div className="headerTradesItem">
                        <LiveTradeItem name="Semubam" />
                        <LiveTradeItem name="Vepaf17" />
                        <LiveTradeItem name="user_f78029" />
                        <LiveTradeItem name="Semubam" />
                        <LiveTradeItem name="Vepaf17" />
                        <LiveTradeItem name="user_f78029" />
                        <LiveTradeItem name="Semubam" />
                        <LiveTradeItem name="Vepaf17" />
                        <LiveTradeItem name="user_f78029" />
                        <LiveTradeItem name="Semubam" />
                        <LiveTradeItem name="Vepaf17" />
                        <LiveTradeItem name="user_f78029" />
                    </div>

                    <div className="headerTradesItem">
                        <LiveTradeItem name="Semubam" />
                        <LiveTradeItem name="Vepaf17" />
                        <LiveTradeItem name="user_f78029" />
                        <LiveTradeItem name="Semubam" />
                        <LiveTradeItem name="Vepaf17" />
                        <LiveTradeItem name="user_f78029" />
                        <LiveTradeItem name="Semubam" />
                        <LiveTradeItem name="Vepaf17" />
                        <LiveTradeItem name="user_f78029" />
                        <LiveTradeItem name="Semubam" />
                        <LiveTradeItem name="Vepaf17" />
                        <LiveTradeItem name="user_f78029" />
                    </div>
                </div>

                <div className="headerCredentials">
                    {/* <button className="mainGradientButton headerLogin" onClick={() => setLoginModal(true)}>
                        <UserLogin />
                        Log in / Sign up
                    </button> */}

                    <div className="headerWalletInner" ref={walletRef}>
                        <button
                            className="headerWallet"
                            onClick={() => setWalletModal((prev) => !prev)}
                        >
                            <Coin />
                            0.0$
                            <span>Wallet</span>
                        </button>

                        {walletModal && (
                            <div className="headerWalletModal">
                                <div className="headerWalletModalBalance">
                                    <p className="headerWalletModalBalanceText">
                                        Withdrawable balance
                                    </p>

                                    <p className="headerWalletModalBalanceValue">
                                        0$
                                    </p>
                                </div>

                                <div className="headerWalletModalEmail">
                                    <p className="headerWalletModalEmailText">
                                        <Mail2 />
                                        Your email
                                    </p>

                                    <button
                                        className="headerWalletModalEmailValue"
                                        onClick={() =>
                                            navigator.clipboard.writeText(
                                                "work.easy@gmail.com",
                                            )
                                        }
                                    >
                                        <Copy />
                                        work.easy@gmail.com
                                    </button>
                                </div>

                                <div className="headerWalletModalButtons">
                                    <button
                                        className="outlinedButton headerWalletModalButton"
                                        onClick={() => setWithdrawModal(true)}
                                    >
                                        Withdraw
                                    </button>

                                    <button
                                        className="mainGradientButton headerWalletModalButton"
                                        onClick={() => setDepositeModal(true)}
                                    >
                                        Deposite
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/points" className="headerButtonStars">
                        <Stars />0
                    </Link>

                    <div className="headerUserInner" ref={userRef}>
                        <button
                            className={cn("headerButton", {
                                ["active"]: userModal,
                            })}
                            onClick={() => setUserModal((prev) => !prev)}
                        >
                            <UserAvatar
                                width={22}
                                height={22}
                                image="/img/token1.png"
                            />
                            <ArrowDown className="headerButtonDown" />
                        </button>

                        {userModal && (
                            <div className="headerUserModal">
                                <div className="headerUserInfo">
                                    <UserAvatar image="/img/token1.png" />

                                    <div className="headerUserInfoTextBlock">
                                        <p className="headerUserInfoText">
                                            User
                                        </p>

                                        <p className="headerUserInfoName">
                                            User_9185151
                                        </p>
                                    </div>
                                </div>

                                <div className="headerWalletModalEmail">
                                    <p className="headerWalletModalEmailText">
                                        <Mail2 />
                                        Your email
                                    </p>

                                    <button
                                        className="headerWalletModalEmailValue"
                                        onClick={() =>
                                            navigator.clipboard.writeText(
                                                "work.easy@gmail.com",
                                            )
                                        }
                                    >
                                        <Copy />
                                        work.easy@gmail.com
                                    </button>
                                </div>

                                <div className="headerWalletModalEmail">
                                    <p className="headerWalletModalEmailText">
                                        <Solana3 />
                                        Sol wallet
                                    </p>

                                    <button className="solanaConnect">
                                        Connect
                                    </button>
                                </div>

                                <button className="headerUserLogout">
                                    Logout
                                    <Logout />
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        className="headerButton"
                        onClick={() => setChatIsOpen((prev) => !prev)}
                    >
                        <Chat2 />
                    </button>

                    <Link
                        href="/create-token"
                        className="mainGradientButton headerLogin"
                    >
                        Launch
                    </Link>

                    <button
                        className="headerMenuButton"
                        onClick={() => setSidebarIsOpen((prev) => !prev)}
                    >
                        <Menu />
                    </button>
                </div>
            </header>

            <Modal value={loginModal} setValue={setLoginModal}>
                <div className="loginModal">
                    <Logo />

                    <p className="loginModalTitle">WELCOME TO MOONLAB</p>

                    <button className="mainGradientButton loginModalGoogle">
                        <Google />
                        Continue with Google
                    </button>

                    <p className="loginModalOther">Or continue with email</p>

                    <div className="loginModalEmailInner">
                        <input
                            type="text"
                            placeholder="Enter email"
                            className="loginModalEmail"
                        />
                        <button className="loginModalEmailButton">
                            Continue
                        </button>
                    </div>

                    <div className="loginModalMethods">
                        <button className="loginModalMethod">
                            <Metamask />
                        </button>

                        <button className="loginModalMethod">
                            <WalletConnect />
                        </button>

                        <button className="loginModalMethod">
                            <CoinBase />
                        </button>

                        <button className="loginModalMethod">
                            <Solare />
                        </button>

                        <button className="loginModalMethod">
                            <Dots />
                        </button>
                    </div>

                    <div className="loginModalLinks">
                        <Link href="/" className="loginModalLink">
                            Privacy Policy
                        </Link>

                        <Link href="/" className="loginModalLink">
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </Modal>

            <Modal
                value={withdrawModal}
                setValue={setWithdrawModal}
                size="small"
            >
                <div className="withdrawModal">
                    <p className="withdrawModalTitle">Withdraw</p>

                    <div className="withdrawModalForm">
                        <Select
                            title="Token"
                            full
                            placeholder="Select Token"
                            options={[
                                {
                                    label: "Solana",
                                    value: "sol",
                                },
                                {
                                    label: "Usdt",
                                    value: "usdt",
                                },
                            ]}
                        />

                        <Input
                            placeholder="Enter email"
                            title="Withdrawal Address"
                            full
                        />

                        <div className="amountWrap">
                            <div className="amountWrapTitleInner">
                                <p className="amountWrapTitle">Amount</p>

                                <p className="amountWrapTitleBalance">
                                    Balance: <span>$0.00</span>
                                </p>
                            </div>

                            <div className="amountWrapInputInner">
                                <input
                                    type="number"
                                    className="amountWrapInput"
                                    inputMode="decimal"
                                />
                                <Coin />
                                <button className="amountWrapInputButton">
                                    Max
                                </button>
                            </div>
                        </div>

                        <div className="withdrawModalInfo">
                            <Warn />
                            Do not withdraw to exchange deposit addresses; they
                            may not credit deposits sent via smart contracts.
                        </div>

                        <button className="mainGradientButton withdrawModalButton">
                            Withdraw 0 USD
                        </button>
                    </div>
                </div>
            </Modal>

            <Modal value={depositeModal} setValue={setDepositeModal}>
                <div className="depositeModal">
                    {depositeStep === 1 && (
                        <>
                            <div className="depositeModalTop">
                                <p className="depositeModalTopTitle">Deposit</p>

                                <p className="depositeModalTopBalance">
                                    Moonlab Balance: <span>0$</span>
                                </p>
                            </div>

                            <div className="depositeModalItems">
                                <button
                                    className="depositeModalItem"
                                    onClick={() => setDepositeStep(2)}
                                >
                                    <span className="depositeModalItemInfo">
                                        <span className="depositeModalItemInfoIcon">
                                            <Transfer />
                                        </span>

                                        <span className="depositeModalItemTextBlock">
                                            <span className="depositeModalItemTitle">
                                                Transfer Crypto
                                            </span>

                                            <span className="depositeModalItemText">
                                                No Limit • Instant
                                            </span>
                                        </span>
                                    </span>

                                    <span className="depositeModalIcons">
                                        <span className="depositeModalIcon">
                                            <Metamask />
                                        </span>
                                        <span className="depositeModalIcon">
                                            <WalletConnect />
                                        </span>
                                        <span className="depositeModalIcon">
                                            <CoinBase />
                                        </span>
                                        <span className="depositeModalIcon">
                                            <Solare />
                                        </span>
                                    </span>
                                </button>

                                <button
                                    className="depositeModalItem"
                                    onClick={() => setDepositeStep(2)}
                                >
                                    <span className="depositeModalItemInfo">
                                        <span className="depositeModalItemInfoIcon">
                                            <Wallet2 />
                                        </span>

                                        <span className="depositeModalItemTextBlock">
                                            <span className="depositeModalItemTitle">
                                                Deposit from wallet
                                            </span>

                                            <span className="depositeModalItemText">
                                                From connected wallet
                                            </span>
                                        </span>
                                    </span>

                                    <span className="depositeModalIcons">
                                        <span className="depositeModalIcon">
                                            <Metamask />
                                        </span>
                                        <span className="depositeModalIcon">
                                            <WalletConnect />
                                        </span>
                                        <span className="depositeModalIcon">
                                            <CoinBase />
                                        </span>
                                        <span className="depositeModalIcon">
                                            <Solare />
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </>
                    )}

                    {depositeStep === 2 && <>
                        <div className="depositeTitleInner">
                            <div className="depositeTitleBlock">
                                <button className="depositeTitlePrev" onClick={() => setDepositeStep(1)}>
                                    <ArrowLeft />
                                </button>

                                <div className="depositeTitleWrap">
                                    <p className="depositeTitle">
                                        Connect Wallet
                                    </p>

                                    <p className="depositeText">
                                        Connect wallet for direct deposit
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="depositeConnects">
                            <button className="depositeConnect" onClick={() => setDepositeStep(3)}>
                                <Metamask />

                                <span className="depositeConnectName">
                                    Metamask
                                </span>
                            </button>

                            <button className="depositeConnect" onClick={() => setDepositeStep(3)}>
                                <WalletConnect />

                                <span className="depositeConnectName">
                                    WalletConnect
                                </span>
                            </button>

                            <button className="depositeConnect" onClick={() => setDepositeStep(3)}>
                                <CoinBase />

                                <span className="depositeConnectName">
                                    Coinbase
                                </span>
                            </button>
                        </div>
                    </>}

                    {depositeStep === 3 && <>
                        <div className="depositeTitleInner">
                            <div className="depositeTitleBlock">
                                <button className="depositeTitlePrev" onClick={() => setDepositeStep(2)}>
                                    <ArrowLeft />
                                </button>

                                <div className="depositeTitleWrap">
                                    <p className="depositeTitle short">
                                        Transfer Crypto
                                    </p>
                                </div>
                            </div>

                            <p className="depositeModalTopBalance">
                                Moonlab Balance: <span>0$</span>
                            </p>
                        </div>

                        <Select title="Select Token" placeholder="Select Token" full options={[{
                            label: "Solana",
                            value: "sol"
                        }]} />
                    </>}
                </div>
            </Modal>

            <Modal value={connectSolModal} setValue={setConnectSolModal}>
                <div className="connectSolModal">
                    <div className="connectSolIcon">
                        <Wallet2 />
                    </div>

                    <div className="connectSolModalTextBlock">
                        <p className="connectSolModalTitle">
                            Connect Your Wallet
                        </p>

                        <p className="connectSolModalText">
                            Choose your preferred wallet to connect
                        </p>
                    </div>

                    <div className="connectSolModalButtons">
                        <button className="connectSolModalButton">
                            <WalletConnect />
                            WalletConect
                        </button>

                        <button className="connectSolModalButton">
                            <Solare />
                            Solare
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default Header;
