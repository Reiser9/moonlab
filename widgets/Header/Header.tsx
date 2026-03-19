import Link from "next/link";

import "./index.scss";

import { ArrowDown, Chat2, Coin, Logo, Menu, Stars, UserLogin } from "@/shared/icons";
import { LiveTradeItem } from "@/shared/ui/TradeItem";
import { useSidebarContext } from "@/shared/context/SidebarProvider";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const Header = () => {
    const { setSidebarIsOpen } = useSidebarContext();

    return (
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
                {/* <Link href="/" className="mainGradientButton headerLogin">
                    <UserLogin />
                    Log in / Sign up
                </Link> */}

                <button className="headerWallet">
                    <Coin />

                    0.0$

                    <span>
                        Wallet
                    </span>
                </button>

                <Link href="/points" className="headerButtonStars">
                    <Stars />
                    0
                </Link>

                <button className="headerButton">
                    <UserAvatar width={22} height={22} image="/img/token1.png" />
                    <ArrowDown className="headerButtonDown" />
                </button>

                <button className="headerButton">
                    <Chat2 />
                </button>

                <Link href="/create-token" className="mainGradientButton headerLogin">
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
    );
};

export default Header;
