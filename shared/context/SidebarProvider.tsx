"use client";

import React from "react";

type SidebarContextProps = {
    sidebarIsOpen: boolean;
    setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chatIsOpen: boolean;
    setChatIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

export const useSidebarContext = () => {
    const data = React.useContext(SidebarContext);

    if (!data) {
        throw new Error(
            "Can not useSidebarContext outside of the SidebarProvider",
        );
    }

    return data;
};

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);
    const [chatIsOpen, setChatIsOpen] = React.useState(false);

    return (
        <SidebarContext.Provider
            value={{
                sidebarIsOpen,
                setSidebarIsOpen,
                chatIsOpen,
                setChatIsOpen,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
