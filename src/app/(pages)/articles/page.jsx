"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import article1 from "../../../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../../../public/images/articles/form validation in reactjs using custom react hook.png";
import article4 from "../../../../public/images/articles/smooth scrolling in reactjs.png";
import article5 from "../../../../public/images/articles/todo list app built using react redux and framer motion.png";
import article6 from "../../../../public/images/articles/What is higher order component in React.jpg";
import article7 from "../../../../public/images/articles/What is Redux with easy explanation.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
    const imgRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouse = (event) => {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    };
    const handleMouseLeave = (event) => {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    };

    return (
        <Link
            href={link}
            target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">
                {title}
            </h2>
            <FramerImage
                src={img}
                ref={imgRef}
                alt={title}
                style={{ x: x, y: y }}
                className="w-96 h-auto hidden absolute rounded-lg z-10 md:hidden"
            />
        </Link>
    );
};

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            className="w-full relative p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light sm:flex-col"
            initial={{ y: 200 }}
            whileInView={{
                y: 0,
                transition: { duration: 0.5, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
        >
            <MovingImg title={title} img={img} link={link} />
            <span className="font-semibold text-primary dark:text-primaryDark pl-4 sm:self-start sm:pl-0">
                {date}
            </span>
        </motion.li>
    );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative">
            <div className="absolute -right-3 top-0 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl" />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            duration: 0.2,
                        },
                    }}
                    priority
                    sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,50vw"
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
                    {title}
                </h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary dark:text-primaryDark font-semibold">
                {time}
            </span>
        </li>
    );
};

const ArticlesPage = () => {
    return (
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
            <TransitionEffect />
            <AnimatePresence mode="waot">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Words can Change the World"
                        className="mb-16 lg:!text-7xl sm:mb-8 md:!text-6xl sm:!text-5xl xs:!text-4xl"
                    />
                    <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                            summary="Learn how to create stunning loading screens in React with 3 different methods. 
Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
Improve the user experience."
                            link="/"
                            time="10 min read"
                            img={article2}
                        />
                    </ul>
                    <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
                        All articles
                    </h2>
                    <ul>
                        <Article
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            date="June 9, 2020"
                            link="/"
                            img={article1}
                        />
                        <Article
                            title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                            date="January 21,2021"
                            link="/"
                            img={article2}
                        />
                        <Article
                            title="
Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                            date="March 22,2023"
                            link="/"
                            img={article3}
                        />
                        <Article
                            title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                            date="June 02,2021"
                            link="/"
                            img={article4}
                        />
                        <Article
                            title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                            date="January 22,2023"
                            link="/"
                            img={article5}
                        />
                        <Article
                            title="What Is Higher Order Component (Hoc) In React?"
                            date="March 22,2022"
                            link="/"
                            img={article6}
                        />
                        <Article
                            title="Redux Simplified: A Beginner's Guide For Web Developers"
                            date="March 22,2020"
                            link="/"
                            img={article7}
                        />
                    </ul>
                </Layout>
            </AnimatePresence>
        </main>
    );
};

export default ArticlesPage;
