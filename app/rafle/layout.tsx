import React from "react";

import RafleTabs from "./RafleTabs";

const RafleLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="rafle">
            <div className="container">
                <div className="rafleInner">
                    <RafleTabs />

                    {children}
                </div>
            </div>
        </div>
    );
};

export default RafleLayout;
