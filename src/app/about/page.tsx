"use client";
import React, { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }: { value: any }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <TransitionEffect />
      <div className="max-w-screen-xl mx-auto h-full px-4">
        <div className="flex justify-center mt-8">
          <AnimatedText className={"about_text_shadow"}>
            Passion Fuels Purpose!
          </AnimatedText>
        </div>
        <div className="grid w-full grid-cols-8 gap-8 md:gap-0 lg:gap-2 xl:gap-16 mt-16">
          <div className="col-span-8 md:col-span-4 flex flex-col lg:col-span-3 items-start justify-center pl-4 xl:p-0">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
              Biography
            </h2>
            <p className=" font-medium dark:text-light">
              Hi, I&apos;m Chetan dhakad, a fullstack 
              developer dedicated to crafting seamless, innovative, and
              user-focused digital solutions. With over 1 years of hands-on
              experience in the tech realm, I&apos;m always on the lookout for
              fresh and creative avenues to transform my clients&apos;s ideas
              into reality.
            </p>
            <p className="my-4 font-medium dark:text-light">
              I firmly believe that the essence of development surpasses coding
              &ndash; it involves tackling challenges head-on and engineering
              intuitive, delightful encounters for users.
            </p>
            <p className=" font-medium dark:text-light">
              Whether I&apos;m immersed in architecting a web application,
               or diving into any other digital
              venture, I consistently channel my drive for technical brilliance
              and user-centric philosophy into every endeavor. Anticipating the
              chance to infuse my expertise and enthusiasm into your upcoming
              project.
            </p>
          </div>
          <div className="col-span-8 md:col-span-4 p-8 lg:col-span-3">
            <Image
              src={"/images/profile/prof2.jpg"}
              width={300}
              height={300}
              className="w-full h-full object-cover about_shadow"
              alt=""
            />
          </div>
          <div className="col-span-8 flex flex-row md:mt-12 lg:col-span-2 lg:mt-0 lg:flex-col items-center  justify-between p-4">
            <div className="flex flex-col items-center justify-center">
              <span className="inline-block text-3xl md:text-5xl font-bold dark:text-light">
                <AnimatedNumbers value={5} />+
              </span>
              <h2 className=" text-lg md:textxl font-medium  capitalize text-dark/75 dark:text-light/75 text-center">
                Satisfied Client
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center dark:text-light">
              <span className="inline-block text-3xl md:text-5xl font-bold">
                <AnimatedNumbers value={15} />+
              </span>
              <h2 className="text-lg md:textxl font-medium  capitalize text-dark/75  dark:text-light/75 text-center">
                Project Completed
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center dark:text-light">
              <span className="inline-block text-3xl md:text-5xl font-bold">
                <AnimatedNumbers value={1} />+
              </span>
              <h2 className=" text-lg md:textxl font-medium  capitalize text-dark/75  dark:text-light/75 text-center">
                years of experience
              </h2>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex justify-center mt-32">
          <motion.h1
            className={
              "text-3xl sm:text-5xl md:text-7xl text-dark font-bold text-center md:text-left about_text_shadow dark:text-light"
            }
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            Skills
          </motion.h1>
        </div>
        <Skills />

        {/* Experience */}
        <div className="flex justify-center mt-32">
          <motion.h1
            className={
              "text-3xl sm:text-5xl md:text-7xl text-dark font-bold text-center md:text-left about_text_shadow dark:text-light"
            }
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            Experience
          </motion.h1>
        </div>
        <Experience />

        {/* Education */}
        <div className="flex justify-center mt-32">
          <motion.h1
            className={
              "text-3xl sm:text-5xl md:text-7xl text-dark font-bold text-center md:text-left about_text_shadow dark:text-light"
            }
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            Education
          </motion.h1>
        </div>
        <Education />
      </div>
    </>
  );
}
