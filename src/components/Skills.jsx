import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light shadow-dark cursor-pointer py-3 px-6 absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:bg-transparent sm:dark:bg-transparent sm:text-dark sm:dark:text-light sm:font-bold"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
                Skills
            </h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularDarkSm sm:dark:bg-circularDarkSm"> 
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="JavaScript" x="20vw" y="6vw" />
                <Skill name="ReactJs" x="0vw" y="12vw" />
                <Skill name="NextJs" x="2vw" y="6vw" />
                <Skill name="Web Design" x="15vw" y="-12vw" />
                <Skill name="ChakraUI" x="28vw" y="-5vw" />
                <Skill name="TailwindCss" x="0vw" y="-20vw" />
                <Skill name="MaterialUI" x="-25vw" y="-18vw" />
                <Skill name="Sass" x="18vw" y="18vw" />
            </div>
        </>
    );
};

export default Skills;
