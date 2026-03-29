"use client";

import React from "react";

type SidebarContextProps = {
    sidebarIsOpen: boolean;
    setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    chatIsOpen: boolean;
    setChatIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    modalIsOpen: boolean;
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    withdrawModal: boolean;
    setWithdrawModal: React.Dispatch<React.SetStateAction<boolean>>;
    depositeModal: boolean;
    setDepositeModal: React.Dispatch<React.SetStateAction<boolean>>;
    connectSolModal: boolean;
    setConnectSolModal: React.Dispatch<React.SetStateAction<boolean>>;
    loginModal: boolean;
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
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
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [withdrawModal, setWithdrawModal] = React.useState(false);
    const [depositeModal, setDepositeModal] = React.useState(false);
    const [connectSolModal, setConnectSolModal] = React.useState(false);
    const [loginModal, setLoginModal] = React.useState(false);

    return (
        <SidebarContext.Provider
            value={{
                sidebarIsOpen,
                setSidebarIsOpen,
                chatIsOpen,
                setChatIsOpen,
                modalIsOpen,
                setModalIsOpen,
                withdrawModal,
                setWithdrawModal,
                depositeModal,
                setDepositeModal,
                connectSolModal,
                setConnectSolModal,
                loginModal,
                setLoginModal,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;
