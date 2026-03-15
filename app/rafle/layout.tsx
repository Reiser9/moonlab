import React from "react";

import RafleTabs from "./RafleTabs";

const RafleLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <RafleTabs />

            {children}
        </>
    );
};

export default RafleLayout;
