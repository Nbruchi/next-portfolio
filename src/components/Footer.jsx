import Link from "next/link";
import React from "react";

import Layout from "./Layout";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
            <Layout className="py-8 flex items-center justify-between lg:flex-col lg:px-6">
                <span>
                    {new Date().getFullYear()} &copy; All rights reserved.
                </span>
                <div className="flex items-center">
                    Built with{" "}
                    <span className="px-1 text-primary dark:text-primaryDark text-2xl">
                        &#9825;
                    </span>
                    by &nbsp;{" "}
                    <Link
                        href="https://devreaming.com"
                        className="underline underline-offset-2"
                        target="_blank"
                    >
                        Nkundabagenzi Bruce
                    </Link>
                </div>
                <Link
                    href="https://devreaming.com"
                    className="underline underline-offset-2"
                >
                    Say hello
                </Link>
            </Layout>
        </footer>
    );
};

export default Footer;
