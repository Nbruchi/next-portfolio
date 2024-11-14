"use client";

// External imports
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Native imports
import Logo from "./Logo";
import {
    DribbbleIcon,
    GithubIcon,
    LinkedInIcon,
    MoonIcon,
    PinterestIcon,
    SunIcon,
} from "./Icons";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
    const pathname = usePathname();
    
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    pathname === href ? "w-full" : "w-0"
                } dark:bg-light`}
            >
                &nbsp;
            </span>
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <button
            className={`${className} relative group text-light dark:text-dark my-2`}
            onClick={handleClick}
        >
            {title}
            <span
                className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                    pathname === href ? "w-full" : "w-0"
                } dark:bg-dark`}
            >
                &nbsp;
            </span>
        </button>
    );
};

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light dark:bg-dark relative z-10 lg:px-16 md:px-12 sm:px-8">
            <button
                className="hidden lg:flex flex-col justify-center items-center"
                onClick={handleClick}
            >
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                        open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                />
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out my-0.5 ${
                        open ? "opacity-0" : "opacity-100"
                    }`}
                />
                <span
                    className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
                        open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                />
            </button>

            {/*  Navbar */}
            <div className="flex w-full justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-2" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink
                        href="/projects"
                        title="Projects"
                        className="mx-4"
                    />
                    <CustomLink
                        href="/articles"
                        title="Articles"
                        className="ml-4"
                    />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        href="https://github.com/Nbru-cee"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/nkundabagenzi-bruce-5a3722291/"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a
                        href="https://nl.pinterest.com/nbruce420/"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3 bg-light rounded-full"
                    >
                        <PinterestIcon />
                    </motion.a>
                    <motion.a
                        href="https://dribbble.com/Bru-cee"
                        target="_blank"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-6 mr-3"
                    >
                        <DribbbleIcon />
                    </motion.a>
                    <button
                        onClick={() =>
                            setMode(mode === "light" ? "dark" : "light")
                        }
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                            mode === "light"
                                ? "bg-dark text-light"
                                : "bg-light text-dark"
                        }`}
                    >
                        {mode === "dark" ? <SunIcon /> : <MoonIcon />}
                    </button>
                </nav>
            </div>
            {/* End of Navbar */}

            {/* Mobile Nav */}
            {open && (
                <motion.div
                    className="min-w-[50vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg -backdrop-blur-sm py-32"
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        transition: { duration: 0.25 },
                    }}
                >
                    <nav className="flex flex-col items-center justify-center">
                        <CustomMobileLink
                            href="/"
                            title="Home"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/about"
                            title="About"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/projects"
                            title="Projects"
                            toggle={handleClick}
                        />
                        <CustomMobileLink
                            href="/articles"
                            title="Articles"
                            toggle={handleClick}
                        />
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap mt-4">
                        <motion.a
                            href="https://github.com/Nbru-cee"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 bg-light dark:bg-dark rounded-full sm:mx-1"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/nkundabagenzi-bruce-5a3722291/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mx-1"
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a
                            href="https://nl.pinterest.com/nbruce420/"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 bg-light rounded-full sm:mx-1"
                        >
                            <PinterestIcon />
                        </motion.a>
                        <motion.a
                            href="https://dribbble.com/Bru-cee"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-6 mr-3 sm:mx-1"
                        >
                            <DribbbleIcon />
                        </motion.a>
                        <button
                            onClick={() =>
                                setMode(mode === "light" ? "dark" : "light")
                            }
                            className={`ml-3 flex items-center justify-center rounded-full p-1 sm:mx-1 ${
                                mode === "light"
                                    ? "bg-dark text-light"
                                    : "bg-light text-dark"
                            }`}
                        >
                            {mode === "dark" ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </nav>
                </motion.div>
            )}
            {/* End of Mobile nav */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2">
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
