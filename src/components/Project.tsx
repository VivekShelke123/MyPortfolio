"use client";
import { ProjectData } from "@/lib/Project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MagicButtons from "./ui/Magic-Buttons";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Project = () => {

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    } else {
      controls1.start('hidden');
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    } else {
      controls2.start('hidden');
    }
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) {
      controls3.start('visible');
    } else {
      controls3.start('hidden');
    }
  }, [controls3, inView3]);

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
  };


  return (
    <section className="text-white">
      <motion.div
        className="text-3xl mb-4 p-5 text-center"
      >
        <h1>Projects</h1>
      </motion.div>
      <motion.div
        ref={ref1}
        animate={controls1}
        initial='hidden'
        variants={variants}
        className="px-8 text-center text-blue-300">
        <p>I have developed a diverse range of projects, starting with foundational technologies like HTML, CSS, and JavaScript, and integrating EJS with Node.js. My experience extends to using TypeScript and Tailwind CSS for efficient styling. I have built numerous projects with React.js and Next.js, focusing on creating dynamic user interfaces. My full-stack development skills are showcased through projects that utilize Node.js and Express.js for backend functionality, with a recent notable project being a comprehensive full-stack application developed with Next.js.</p>
      </motion.div>
      <div className="">
        {ProjectData.map((item) => (
          <motion.div
            key={item.id}
            ref={item.id <= 2 ? ref2 : ref3}
            animate={item.id <= 2 ? controls2 : controls3}
            initial='hidden'
            variants={item.id % 2 ? variants1 : variants2}
            className="flex flex-col relative items-center">
            <Card  className="mx-10 my-6 w-[70%]">
              <CardHeader>
                <CardTitle className="py-3 text-xl">{item.title}</CardTitle>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={item.link}><MagicButtons /></Link>
              </CardFooter>
            </Card>
          </motion.div>

        ))}
      </div>
    </section>
  )
}

export default Project;
