"use client";

import React from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.scss";

import { ArrowLeft, ArrowRight, Coin, Trophy } from "@/shared/icons";
import Image from "next/image";

const LobbyTokenBattle = () => {
    const swiperInstance = React.useRef<SwiperClass | null>(null);

    return <>
        <div className="lobbyTop">
            <div className="lobbyTopTitleInner">
                <p className="title2">Standart battle</p>
                <p className="lobbyTopText">
                    <Trophy />
                    10 Rounds
                </p>
            </div>

            <div className="lobbyTopCost">
                <p className="lobbyTopCostTitle">Battle cost</p>
                <p className="lobbyTopCostValue">100.00$</p>
            </div>
        </div>

        <p className="title2">
            Live battle view
        </p>

        <Swiper
            pagination={{
                type: "progressbar",
            }}
            spaceBetween={16}
            slidesPerView={5}
            modules={[Pagination, Navigation]}
            className="lobbySlider"
            onSwiper={(swiper) => {
                swiperInstance.current = swiper;
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                430: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                750: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1050: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                1350: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                }
            }}
        >
            <SwiperSlide className="lobbySlide">
                <div className="lobbySlideUserImageInner">
                    <div className="lobbySlideUserImage">
                        <Image src="/img/token1.png" alt="token" fill />
                    </div>
                </div>

                <p className="lobbySlideUserName">User_9185151</p>

                <p className="lobbySlideStatus">Ready</p>

                <button className="outlinedButton lobbySlideWallet">
                    Wallet
                </button>
            </SwiperSlide>

            <SwiperSlide className="lobbySlide">
                <div className="lobbySlideUserImageInner">
                    <div className="lobbySlideUserImage">
                        <Image src="/img/token1.png" alt="token" fill />
                    </div>
                </div>

                <p className="lobbySlideUserName">User_9185151</p>

                <p className="lobbySlideStatus">Ready</p>

                <button className="mainGradientButton lobbySlideJoin">
                    Join Battle
                </button>

                <p className="lobbySlideMoney">
                    <Coin />
                    0.0$
                </p>
            </SwiperSlide>

            <SwiperSlide className="lobbySlide">
                <div className="lobbySlideUserImageInner">
                    <div className="lobbySlideUserImage">
                        <Image src="/img/token1.png" alt="token" fill />
                    </div>
                </div>

                <p className="lobbySlideUserName">User_9185151</p>

                <p className="lobbySlideStatus">Ready</p>

                <button className="outlinedButton lobbySlideWallet">
                    Wallet
                </button>
            </SwiperSlide>

            <SwiperSlide className="lobbySlide">
                <div className="lobbySlideUserImageInner">
                    <div className="lobbySlideUserImage">
                        <Image src="/img/token1.png" alt="token" fill />
                    </div>
                </div>

                <p className="lobbySlideUserName">User_9185151</p>

                <p className="lobbySlideStatus">Ready</p>

                <button className="outlinedButton lobbySlideWallet">
                    Wallet
                </button>
            </SwiperSlide>

            <SwiperSlide className="lobbySlide">
                <div className="lobbySlideUserImageInner">
                    <div className="lobbySlideUserImage">
                        <Image src="/img/token1.png" alt="token" fill />
                    </div>
                </div>

                <p className="lobbySlideUserName">User_9185151</p>

                <p className="lobbySlideStatus">Ready</p>

                <button className="mainGradientButton lobbySlideJoin">
                    Join Battle
                </button>

                <p className="lobbySlideMoney">
                    <Coin />
                    0.0$
                </p>
            </SwiperSlide>

            <SwiperSlide className="lobbySlide">
                <div className="lobbySlideUserImageInner">
                    <div className="lobbySlideUserImage">
                        <Image src="/img/token1.png" alt="token" fill />
                    </div>
                </div>

                <p className="lobbySlideUserName">User_9185151</p>

                <p className="lobbySlideStatus">Ready</p>

                <button className="outlinedButton lobbySlideWallet">
                    Wallet
                </button>
            </SwiperSlide>

            <SwiperSlide className="lobbySlide">
                <div className="lobbySlideUserImageInner">
                    <div className="lobbySlideUserImage">
                        <Image src="/img/token1.png" alt="token" fill />
                    </div>
                </div>

                <p className="lobbySlideUserName">User_9185151</p>

                <p className="lobbySlideStatus">Ready</p>

                <button className="mainGradientButton lobbySlideJoin">
                    Join Battle
                </button>

                <p className="lobbySlideMoney">
                    <Coin />
                    0.0$
                </p>
            </SwiperSlide>

            <div className="pageBattleSliderNav">
                <button
                    className="pageBattleSliderArrow"
                    onClick={() => swiperInstance.current?.slidePrev()}
                >
                    <ArrowLeft />
                </button>

                <button
                    className="pageBattleSliderArrow"
                    onClick={() => swiperInstance.current?.slideNext()}
                >
                    <ArrowRight />
                </button>
            </div>
        </Swiper>

        <div className="lobbySearching">
            <p className="lobbySearchingTitle">Waiting for players</p>

            <p className="lobbySearchingNumber">2 <span>/</span> 4</p>

            <p className="lobbySearchingText">Battle starts automatically when slats are filled</p>

            <button className="mainGradientButton lobbySearchingButton">
                Joine Battle - 100$
            </button>

            <p className="lobbySearchingText">Deposite will be locked until battle ends</p>
        </div>

        <div className="lobbyRules">
            <p className="lobbyRulesTitle">
                Battle rules
            </p>

            <div className="lobbyRulesItems">
                <div className="lobbyRulesItem">
                    <p className="lobbyRulesItemNum">01</p>
                    <p className="lobbyRulesItemText">All players start with equal 100$ deposite for tranding</p>
                </div>

                <div className="lobbyRulesItem">
                    <p className="lobbyRulesItemNum">02</p>
                    <p className="lobbyRulesItemText">Trade ETH/USD for 5 minutes. Highest PLN wins the prize pool</p>
                </div>

                <div className="lobbyRulesItem">
                    <p className="lobbyRulesItemNum">03</p>
                    <p className="lobbyRulesItemText">Positions and trades are visible to all participants in real-time</p>
                </div>
            </div>
        </div>
    </>
};

export default LobbyTokenBattle;
