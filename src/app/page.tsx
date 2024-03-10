"use client";
import LinkIcon from "@/components/Icons/LinkIcon";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const quoto = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};
export default function Home() {
  return (
    <>
      <TransitionEffect />
      <div className="max-w-screen-xl mx-auto h-full">
        <div className=" flex flex-col md:flex-row  h-full gap-5 md:gap-0">
          {/* img container */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={"/images/profile/developer_img.jpg"}
              width={540}
              height={540}
              className=" object-cover"
              alt="profile-img"
              priority
            />
          </div>

          <div className="flex-1  flex justify-center px-4 sm:px-6 md:px-8 flex-col">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-5xl text-dark font-bold text-center md:text-left home_shadow dark:text-light"
              variants={quoto}
              initial="initial"
              animate="animate"
            >
              Crafting Digital Dreams:
              <br />
              From Concept to Creation in Code and Design.
            </motion.h1>

            <p className="my-5 text-sm md:text-base text-justify md:text-start font-medium dark:text-light">
              Welcome to my digital realm! I am a versatile Full-Stack Developer
              and adept React Native developer, on a passionate journey to
              transform concepts into captivating web and mobile marvels.
              Explore the fusion of innovation, efficiency, and user-centric
              design across my portfolio.
            </p>

            <div className="flex items-center gap-8 mt-8 justify-center md:justify-start">
              <Link
                href={"/chetan resume mern.pdf"}
                target={"_parent"}
                download={true}
              >
                <div className="bg-dark w-max text-light px-4 py-2 rounded-lg flex items-center justify-center gap-1 group dark:bg-light dark:text-dark ">
                  <p className="text-lg text-light dark:text-dark">Resume</p>
                  <LinkIcon className=" group-hover:translate-x-1 transition-all" />
                </div>
              </Link>

              <Link
                href={"/contact"}
                className="text-lg underline text-dark hover:no-underline transition-all dark:text-light"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
