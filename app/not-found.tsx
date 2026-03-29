import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Moonlab - Страница не найдена",
};

const NotFound = () => {
    return (
        <div className="notfound">
            <h1 className="notfound__title">Страница не найдена</h1>
            <Link href="/" className="notfound__link">На главную</Link>
        </div>
    );
};

export default NotFound;
