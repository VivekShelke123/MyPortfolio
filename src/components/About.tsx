"use client";
import { useAnimation, motion, delay } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } }
    };
    const variants1 = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }
    };
    const variants2 = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }
    }

    return (
        <section className="text-white relative z-10">
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={variants}
                id="about"
                className="text-3xl mb-4 p-5 text-center">
                <h1>About Me</h1>
            </motion.div>
            <div className="w-full">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial='hidden'
                    variants={variants2}
                    className="flex flex-col items-center">
                    <h1 className="text-xl">EDUCATION</h1>
                    <p className="w-[50%] text-blue-300"> As a final-year Computer Science student with an expected graduation in 2025, my passion lies in web development, where I excel in both frontend and backend technologies. Throughout my academic journey, I have focused on mastering the art of building robust web applications. Actively participating in hackathons and coding competitions has honed my problem-solving skills and cultivated a proactive approach to overcoming challenges. These experiences have equipped me with the expertise to innovate and implement effective solutions that address real-world needs in the realm of web development.</p>
                </motion.div>
            </div>
            <div className="mt-[5%]">
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial='hidden'
                    variants={variants1}
                    className="flex flex-col items-center">
                    <h1 className="text-xl">SKILLS</h1>
                    <p className="w-[50%] text-blue-300"> As a proficient web developer, I specialize in the MERN stack, utilizing Tailwind CSS and Next.js to create seamless user experiences. With extensive knowledge in React.js, Redux, TypeScript, Bootstrap, and jQuery, I excel in developing dynamic, responsive applications. My expertise in REST APIs and database management ensures robust and efficient backend solutions.</p>
                </motion.div>
            </div>

        </section>
    )
}

export default About;
