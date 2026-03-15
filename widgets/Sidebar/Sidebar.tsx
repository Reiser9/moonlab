"use client";

import React from "react";
import Link from "next/link";
import cn from "classnames";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { usePathname } from "next/navigation";

import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
    ArrowLeft,
    Chart,
    Chat,
    Close,
    Crown,
    Dashboard,
    Doc,
    Group,
    Home,
    Logo,
    LogoSmall,
    Mining,
    OpenSidebar,
    Points,
    Send,
    Support,
    Telegram,
    Warn,
    X,
} from "@/shared/icons";
import { EffectFade, Pagination } from "swiper/modules";
import { ChatItem } from "@/shared/ui/ChatItem";
import { useSidebarContext } from "@/shared/context/SidebarProvider";

const Sidebar = () => {
    const swiperInstance = React.useRef<SwiperClass | null>(null);

    const { sidebarIsOpen, setSidebarIsOpen, chatIsOpen, setChatIsOpen } =
        useSidebarContext();
    const pathname = usePathname();

    return (
        <>
            <aside
                className={cn("sidebar", {
                    ["active"]: sidebarIsOpen,
                })}
            >
                <button
                    className="sidebarClose"
                    onClick={() => setSidebarIsOpen(false)}
                >
                    <Close />
                </button>

                <div className="sidebarTop">
                    <Link href="/" className="sidebarLogo">
                        <LogoSmall />
                        <Logo />
                    </Link>

                    <nav className="sidebarNav">
                        <button
                            className={cn(
                                "gradientButton",
                                "sidebarOpenButton",
                                {
                                    ["active"]: sidebarIsOpen,
                                },
                            )}
                            onClick={() => {
                                setSidebarIsOpen((prev) => !prev);
                                setChatIsOpen(false);
                            }}
                        >
                            <OpenSidebar />
                        </button>

                        <Link
                            href="/"
                            className={cn("sidebarNavLink", {
                                ["active"]: pathname === "/",
                            })}
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Home />
                            </span>
                            Home
                        </Link>

                        <Link
                            href="/"
                            className="sidebarNavLink"
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Chart />
                            </span>
                            Diccover
                        </Link>

                        <Link
                            href="/dashboard"
                            className={cn("sidebarNavLink", {
                                ["active"]: pathname.includes("/dashboard"),
                            })}
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Dashboard />
                            </span>
                            Dashboard
                        </Link>

                        <Link
                            href="/affiliates"
                            className={cn("sidebarNavLink", {
                                ["active"]: pathname.includes("/affiliates"),
                            })}
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Group />
                            </span>
                            Affiliates
                            <span className="sidebarNavLinkPromo">Promo</span>
                        </Link>

                        <Link
                            href="/"
                            className="sidebarNavLink"
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Points />
                            </span>
                            Points
                            <span className="sidebarNavLinkPoints">0.0</span>
                        </Link>

                        <Link
                            href="/rafle"
                            className={cn("sidebarNavLink", {
                                ["active"]: pathname.includes("/rafle"),
                            })}
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Crown />
                            </span>
                            Hall of fame
                        </Link>

                        <Link
                            href="/"
                            className="sidebarNavLink"
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Mining />
                            </span>
                            Mindshare Mining
                        </Link>

                        <Link
                            href="/terminal"
                            className={cn("sidebarNavLink", {
                                ["active"]: pathname === "/terminal",
                            })}
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <span className="sidebarNavProfile">
                                    <Image
                                        src="/img/token1.png"
                                        alt="profile"
                                        fill
                                    />
                                </span>
                            </span>
                            Profile
                        </Link>

                        <Link
                            href="/"
                            className="sidebarNavLink"
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Support />
                            </span>
                            Support
                        </Link>

                        <Link
                            href="/"
                            className="sidebarNavLink"
                            onClick={() => setSidebarIsOpen(false)}
                        >
                            <span className="gradientButton">
                                <Doc />
                            </span>
                            More
                        </Link>
                    </nav>
                </div>

                <div className="sidebarBottom">
                    <Swiper
                        slidesPerView={1}
                        className="sidebarBottomCarousel"
                        loop
                        onSwiper={(swiper) => {
                            swiperInstance.current = swiper;
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination, EffectFade]}
                        effect="fade"
                    >
                        <SwiperSlide className="sidebarSlide">
                            <Image
                                src="/img/sidebarslide-bg.webp"
                                alt="bg"
                                fill
                            />

                            <p className="sidebarSlideTitle">
                                Launch tokens on Turbo
                            </p>
                            <p className="sidebarSlideText">
                                No insiders, no rugpulls - pure math bullet
                                point icon
                            </p>
                            <button className="sidebarSlideButton">Join</button>
                        </SwiperSlide>

                        <SwiperSlide className="sidebarSlide">
                            <Image
                                src="/img/sidebarslide-bg.png"
                                alt="bg"
                                fill
                            />

                            <p className="sidebarSlideTitle">
                                Launch tokens on Turbo 2
                            </p>
                            <p className="sidebarSlideText">
                                No insiders, no rugpulls - pure math bullet
                                point icon 2
                            </p>
                            <button className="sidebarSlideButton">Join</button>
                        </SwiperSlide>
                    </Swiper>

                    <a href="#" target="_blank" className="sidebarSocialLink">
                        <span>
                            <X />
                        </span>
                        X.com
                    </a>

                    <a href="#" target="_blank" className="sidebarSocialLink">
                        <span>
                            <Telegram />
                        </span>
                        Telegram
                    </a>

                    <button
                        className="sidebarSupport"
                        onClick={() => {
                            setSidebarIsOpen(false);
                            setChatIsOpen(true);
                        }}
                    >
                        <span className="gradientButton">
                            <Chat />
                        </span>
                        Chat
                    </button>
                </div>
            </aside>

            <div
                className={cn("chat", {
                    ["active"]: chatIsOpen,
                })}
            >
                <button
                    className="chatClose"
                    onClick={() => setChatIsOpen(false)}
                >
                    <span>
                        <ArrowLeft />
                    </span>
                    Chat
                </button>

                <div className="chatContent">
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                </div>

                <div className="chatBottom">
                    <div className="chatInputInner">
                        <input
                            type="text"
                            placeholder="Ваше сообщение"
                            className="chatInput"
                        />

                        <button className="chatSend">
                            <Send />
                        </button>
                    </div>

                    <div className="chatAccess">
                        <Warn />
                        To access chat, make a minimum deposit.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
