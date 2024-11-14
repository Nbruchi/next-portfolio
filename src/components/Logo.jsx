"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <MotionLink
                href="/"
                whileHover={{
                    backgroundColor: [
                        "#121212",
                        "rgba(131,58,180,1)",
                        "rgba(253,29,29,1)",
                        "rgba(252,176,69,1)",
                        "rgba(131,58,180,1)",
                        "#121212",
                    ],
                    transition: { duration: 1, repeat: Infinity },
                }}
                className="h-16 w-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light"
            >
                NB
            </MotionLink>
        </div>
    );
};

export default Logo;
