import React from "react";

import "./index.scss";

const TokenBattleCreate = () => {
    return <div className="tokenCreateInner">
        <p className="title2">Create token battle</p>

        <div className="tokenCreateTabs">
            <button className="tokenCreateTab active">
                Create token manually
            </button>

            <button className="tokenCreateTab">
                Random token
            </button>
        </div>

        <div className="tokenCreateForm">


            <button className="mainGradientButton tokenCreateButton">
                Create battle
            </button>
        </div>
    </div>;
};

export default TokenBattleCreate;
