"use client";

import React from "react";
import Image from "next/image";
import cn from 'classnames';

import "./index.scss";

import { ArrowDown, Belt, QuestionCircle, Tier1, Tier2, Tier3, Tier4, Tier5, Tier6 } from "@/shared/icons";
import { SliderBlock } from "@/shared/ui/SliderBlock";

const AffiliatesPage = () => {
    const [tierIsShow, setTierIsShow] = React.useState(false);

    return (
        <>
            <div className="affiTop">
                <p className="affiTitle">
                    Affiliate program
                    <QuestionCircle />
                </p>

                <p className="affiSubtitle">
                    Earn from platform revenue — forever
                </p>

                <p className="affiText">
                    Unlock up to 45% of trading fees via affiliate progression.
                    Get paid for every $1 of trader volume
                </p>
            </div>

            <div className="affiLink">
                <div className="affiLinkBanner">
                    <div className="affiLinkBannerBg">
                        <Image src="/img/banner-grid.png" alt="grid" fill />
                    </div>

                    <div className="affiLinkBannerTexts">
                        <p className="affiLinkBannerTitle">
                            Earn 1% on referral tokens
                        </p>

                        <p className="affiLinkBannerText">
                            Invite token creators and receive 1% of their
                            creation fees
                        </p>
                    </div>

                    <button className="affiLinkBannerButton">
                        Active for 6 days
                    </button>
                </div>
            </div>

            <div className="affiEarn">
                <div className="affiEarnTop">
                    <p className="affiEarnTopTitle">
                        Your Earnings
                        <span>0$</span>
                    </p>

                    <button className="outlinedButton affiEarnTopButton">
                        Nothing to claim
                    </button>
                </div>

                <div className="affiEarnContent">
                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">All-Time PnL</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>

                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">Total Active</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>

                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">Total Volume</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>

                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">Trading Fees</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>

                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">Creator Fees</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>
                </div>
            </div>

            <div className="affiTier">
                <div className="affiTierTop">
                    <div className="affiTierTopBelt">
                        <div className="affiTierTopBeltContent">
                            <Belt />
                            <p className="affiTierTopBeltNumber">1</p>
                        </div>

                        <div className="affiTierTopBeltTexts">
                            <p className="affiTierTopBeltTitle">
                                Tier 115% Fee Share
                            </p>

                            <p className="affiTierTopBeltText">
                                Your affiliate level depends on total referral trading volume
                            </p>
                        </div>
                    </div>

                    <button
                        className={cn("outlinedButton", "affiTierTopButton", {
                            ["active"]: tierIsShow
                        })}
                        onClick={() => setTierIsShow((prev) => !prev)}
                    >
                        {tierIsShow ? "Hide" : "Show"} more
                        <ArrowDown />
                    </button>
                </div>

                <SliderBlock progress={20} text="Tier 2" time="$0.0/ $5.0M" />

                {!tierIsShow && <div className="affiTierItems">
                    <div className="affiTierItem active">
                        <div className="affiTierItemIcon">
                            <Tier1 />
                            <p className="affiTierItemIconNumber">1</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 1
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>

                    <div className="affiTierItem">
                        <div className="affiTierItemIcon">
                            <Tier2 />
                            <p className="affiTierItemIconNumber">2</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 2
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>

                    <div className="affiTierItem">
                        <div className="affiTierItemIcon">
                            <Tier3 />
                            <p className="affiTierItemIconNumber">3</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 3
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>

                    <div className="affiTierItem">
                        <div className="affiTierItemIcon">
                            <Tier4 />
                            <p className="affiTierItemIconNumber">4</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 4
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>

                    <div className="affiTierItem">
                        <div className="affiTierItemIcon">
                            <Tier5 />
                            <p className="affiTierItemIconNumber">5</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 5
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>

                    <div className="affiTierItem">
                        <div className="affiTierItemIcon">
                            <Tier2 />
                            <p className="affiTierItemIconNumber">6</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 6
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>

                    <div className="affiTierItem">
                        <div className="affiTierItemIcon">
                            <Tier6 />
                            <p className="affiTierItemIconNumber">7</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 7
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>

                    <div className="affiTierItem">
                        <div className="affiTierItemIcon">
                            <Tier4 />
                            <p className="affiTierItemIconNumber">8</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 8
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>

                    <div className="affiTierItem">
                        <div className="affiTierItemIcon">
                            <Tier5 />
                            <p className="affiTierItemIconNumber">9</p>
                        </div>

                        <p className="affiTierItemTitle">
                            Tier 9
                        </p>

                        <p className="affiTierItemText">
                            15% Free Share
                        </p>

                        <div className="affiTierItemVolume">
                            <p className="affiTierItemVolumeTitle">
                                Volume
                            </p>

                            <p className="affiTierItemVolumeValue">
                                0 $ - 5M $
                            </p>
                        </div>
                    </div>
                </div>}
            </div>

            <div className="affiRefs">
                
            </div>
        </>
    );
};

export default AffiliatesPage;
