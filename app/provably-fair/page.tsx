import "./index.scss";

import { Check, Hashlock } from "@/shared/icons";

const HashCheck = () => {
    return <div className="hashcheck">
        <div className="container">
            <div className="hashcheckInner">
                <div className="hashcheckBlock">
                    <div className="hashcheckBlockContent">
                        <div className="hashcheckBlockContentTitleInner">
                            <p className="hashcheckBlockContentTitle">Provably Fair | Audited by</p>
                            <Hashlock />
                            <p className="hashcheckBlockContentTitle">hashlock.</p>
                        </div>

                        <p className="hashcheckBlockContentText">
                            The chart is generated through a provably fair mechanism, guaranteeing it follows the mathematical model and cannot be altered
                        </p>
                    </div>

                    <a href="#" target="_blank" className="mainGradientButton hashcheckBlockButton">
                        Learn more
                    </a>
                </div>

                <div className="hashcheckWrapper">
                    <p className="hashcheckTitle">
                        Provably Fair
                    </p>

                    <p className="hashcheckSubtitle">
                        Charts follow a provably fair scheme
                    </p>

                    <p className="hashcheckSubtitle">
                        This means price ticks cannot be changed after generation
                    </p>

                    <div className="hashcheckList">
                        <p className="hashcheckListItem">
                            <span>
                                <Check />
                            </span>

                            Before the token expires, we publish a hash that locks the original data
                        </p>

                        <p className="hashcheckListItem">
                            <span>
                                <Check />
                            </span>

                            When the token expires, we reveal the salt and the full set of prices (ticks) so anyone can verify correctness
                        </p>
                    </div>

                    <p className="hashcheckTitle2">This guarantees:</p>

                    <div className="hashcheckList">
                        <p className="hashcheckListItem">
                            <span>
                                <Check />
                            </span>

                            We cannot change prices retroactively because the hash is already published
                        </p>

                        <p className="hashcheckListItem">
                            <span>
                                <Check />
                            </span>

                            Anyone can independently confirm that the disclosed data matches the published hash
                        </p>
                    </div>
                </div>



                <div className="hashcheckWrapper">
                    <p className="hashcheckTitle">
                        Fairness Info
                    </p>

                    <p className="hashcheckSubtitle">For each token you will see:</p>

                    <div className="hashcheckList">
                        <p className="hashcheckListItem">
                            1. Hash — always available (hash of the original data)
                        </p>

                        <p className="hashcheckListItem">
                            2. Speed — always available (ticks per second)
                        </p>

                        <p className="hashcheckListItem">
                            3. Salt — available only after the token expires
                        </p>

                        <p className="hashcheckListItem">
                            4. Copy Prices — copies all prices; available only after the token expires
                        </p>

                        <p className="hashcheckListItem">
                            5. Verify Fairness — runs verification; available only after the token expires
                        </p>
                    </div>
                </div>

                <div className="hashcheckWrapper">
                    <p className="hashcheckTitle">
                        How the Fairness Hash Is Generated
                    </p>

                    <p className="hashcheckSubtitle">The hash is generated using the following formula:</p>

                    <div className="hashcheckCode">
                        <p>const fairHash = ethers.hashMessage(</p>
                        <p className="codeSpace">ticksString + fairSalt + speedTicksInSecond,</p>
                        <p>);</p>
                    </div>
                </div>

                <div className="hashcheckWrapper">
                    <p className="hashcheckTitle">
                        Where:
                    </p>

                    <div className="hashcheckList">
                        <p className="hashcheckListItem">
                            <span>
                                <Check />
                            </span>

                            ticksString — string of all generated prices (comma-separated)
                        </p>

                        <p className="hashcheckListItem">
                            <span>
                                <Check />
                            </span>

                            fairSalt — secret string (revealed after the token expires)
                        </p>

                        <p className="hashcheckListItem">
                            <span>
                                <Check />
                            </span>

                            speedTicksInSecond — number of ticks per second
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default HashCheck;
