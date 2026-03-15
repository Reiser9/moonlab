import React from "react";

import "./index.scss";

import DashboardTabs from "./DashboardTabs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <DashboardTabs />

            {children}
        </>
    );
};

export default DashboardLayout;
