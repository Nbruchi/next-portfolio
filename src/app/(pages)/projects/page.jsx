"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../../../public/images/projects/portfolio-cover-image.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full relative p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light lg:flex-col lg:p-8 md:p-4 sm:p-2 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute -right-3 top-0 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,50vw"
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary dark:text-primaryDark text-xl font-medium xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center w-full justify-start">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 border border-solid border-transparent px-6 text-lg font-semibold dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:bg-dark dark:text-light dark:border-light xs:p-4">
            <div className="absolute -right-3 top-0 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark text-xl font-medium lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
                        {title}
                    </h2>
                </Link>
                <div className="mt-2 flex items-center w-full justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline md:text-base"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const ProjectsPage = () => {
    return (
        <main className="flex items-center text-dark w-full min-h-screen">
            <TransitionEffect />
            <AnimatePresence mode="waot">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Imagination trumps Knowledge"
                        className="mb-16 lg:!text-7xl sm:mb-8 md:!text-6xl sm:!text-5xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-0 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="   Crypto Screener Application"
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                                link="/"
                                github="/"
                                img={project1}
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <Project
                                title="   Crypto Screener Application"
                                link="/"
                                github="/"
                                img={project1}
                                type="Simple Project"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <Project
                                title="   Crypto Screener Application"
                                link="/"
                                github="/"
                                img={project1}
                                type="Simple Project"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="React Portfolio Website"
                                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
page transitions, cool background effects, unique design and it is mobile responsive."
                                link="/"
                                github="/"
                                img={project2}
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <Project
                                title="React Portfolio Website"
                                link="/"
                                github="/"
                                img={project2}
                                type="Simple Project"
                            />
                        </div>
                        <div className="col-span-6 md:col-span-12">
                            <Project
                                title="React Portfolio Website"
                                link="/"
                                github="/"
                                img={project2}
                                type="Simple Project"
                            />
                        </div>
                    </div>
                </Layout>
            </AnimatePresence>
        </main>
    );
};

export default ProjectsPage;
