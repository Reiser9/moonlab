"use client";

import React from "react";
import Link from "next/link";
import cn from "classnames";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { usePathname } from "next/navigation";

import styles from "./index.module.scss";
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
                className={cn(styles.sidebar, {
                    [styles.active]: sidebarIsOpen,
                })}
            >
                <button
                    className={styles.sidebarClose}
                    onClick={() => setSidebarIsOpen(false)}
                >
                    <Close />
                </button>

                <div className={styles.sidebarTop}>
                    <Link href="/" className={styles.sidebarLogo}>
                        <LogoSmall />
                        <Logo />
                    </Link>

                    <nav className={styles.sidebarNav}>
                        <button
                            className={cn(
                                styles.gradientButton,
                                styles.sidebarOpen,
                                {
                                    [styles.active]: sidebarIsOpen,
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
                            className={cn(styles.sidebarNavLink, {
                                [styles.active]: pathname === "/",
                            })}
                        >
                            <span className={styles.gradientButton}>
                                <Home />
                            </span>
                            Home
                        </Link>

                        <Link href="/" className={styles.sidebarNavLink}>
                            <span className={styles.gradientButton}>
                                <Chart />
                            </span>
                            Diccover
                        </Link>

                        <Link href="/" className={styles.sidebarNavLink}>
                            <span className={styles.gradientButton}>
                                <Dashboard />
                            </span>
                            Dashboard
                        </Link>

                        <Link href="/" className={styles.sidebarNavLink}>
                            <span className={styles.gradientButton}>
                                <Group />
                            </span>
                            Affiliates
                            <span className={styles.sidebarNavLinkPromo}>
                                Promo
                            </span>
                        </Link>

                        <Link href="/" className={styles.sidebarNavLink}>
                            <span className={styles.gradientButton}>
                                <Points />
                            </span>
                            Points
                            <span className={styles.sidebarNavLinkPoints}>
                                0.0
                            </span>
                        </Link>

                        <Link href="/" className={styles.sidebarNavLink}>
                            <span className={styles.gradientButton}>
                                <Crown />
                            </span>
                            Hall of fame
                        </Link>

                        <Link href="/" className={styles.sidebarNavLink}>
                            <span className={styles.gradientButton}>
                                <Mining />
                            </span>
                            Mindshare Mining
                        </Link>

                        <Link
                            href="/terminal"
                            className={cn(styles.sidebarNavLink, {
                                [styles.active]: pathname === "/terminal",
                            })}
                        >
                            <span className={styles.gradientButton}>
                                <span className={styles.sidebarNavProfile}>
                                    <Image
                                        src="/img/token1.png"
                                        alt="profile"
                                        fill
                                    />
                                </span>
                            </span>
                            Profile
                        </Link>

                        <Link href="/" className={styles.sidebarNavLink}>
                            <span className={styles.gradientButton}>
                                <Support />
                            </span>
                            Support
                        </Link>

                        <Link href="/" className={styles.sidebarNavLink}>
                            <span className={styles.gradientButton}>
                                <Doc />
                            </span>
                            More
                        </Link>
                    </nav>
                </div>

                <div className={styles.sidebarBottom}>
                    <Swiper
                        slidesPerView={1}
                        className={styles.sidebarBottomCarousel}
                        loop
                        onSwiper={(swiper) => {
                            swiperInstance.current = swiper;
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination, EffectFade]}
                        effect="fade"
                    >
                        <SwiperSlide className={styles.sidebarSlide}>
                            <Image
                                src="/img/sidebarslide-bg.webp"
                                alt="bg"
                                fill
                            />

                            <p className={styles.sidebarSlideTitle}>
                                Launch tokens on Turbo
                            </p>
                            <p className={styles.sidebarSlideText}>
                                No insiders, no rugpulls - pure math bullet
                                point icon
                            </p>
                            <button className={styles.sidebarSlideButton}>
                                Join
                            </button>
                        </SwiperSlide>

                        <SwiperSlide className={styles.sidebarSlide}>
                            <Image
                                src="/img/sidebarslide-bg.png"
                                alt="bg"
                                fill
                            />

                            <p className={styles.sidebarSlideTitle}>
                                Launch tokens on Turbo 2
                            </p>
                            <p className={styles.sidebarSlideText}>
                                No insiders, no rugpulls - pure math bullet
                                point icon 2
                            </p>
                            <button className={styles.sidebarSlideButton}>
                                Join
                            </button>
                        </SwiperSlide>
                    </Swiper>

                    <a
                        href="#"
                        target="_blank"
                        className={styles.sidebarSocialLink}
                    >
                        <span>
                            <X />
                        </span>
                        X.com
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        className={styles.sidebarSocialLink}
                    >
                        <span>
                            <Telegram />
                        </span>
                        Telegram
                    </a>

                    <button
                        className={styles.sidebarSupport}
                        onClick={() => {
                            setSidebarIsOpen(false);
                            setChatIsOpen(true);
                        }}
                    >
                        <span className={styles.gradientButton}>
                            <Chat />
                        </span>
                        Chat
                    </button>
                </div>
            </aside>

            <div
                className={cn(styles.chat, {
                    [styles.active]: chatIsOpen,
                })}
            >
                <button
                    className={styles.chatClose}
                    onClick={() => setChatIsOpen(false)}
                >
                    <span>
                        <ArrowLeft />
                    </span>
                    Chat
                </button>

                <div className={styles.chatContent}>
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

                <div className={styles.chatBottom}>
                    <div className={styles.chatInputInner}>
                        <input
                            type="text"
                            placeholder="Ваше сообщение"
                            className={styles.chatInput}
                        />

                        <button className={styles.chatSend}>
                            <Send />
                        </button>
                    </div>

                    <div className={styles.chatAccess}>
                        <Warn />
                        To access chat, make a minimum deposit.
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
