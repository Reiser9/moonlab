import React from "react";
import Link from "next/link";

import "./index.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footerCopy">
                MoonLab {new Date().getFullYear()} &copy;
            </p>

            <div className="footerLinks">
                <Link href="#" className="footerLink">
                    Privacy Policy
                </Link>
                <Link href="#" className="footerLink">
                    Terms of Use
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
