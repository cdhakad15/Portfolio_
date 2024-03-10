"use client";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import React from "react";
import { BiSolidBriefcase } from "react-icons/bi";
import { AiFillAlert } from "react-icons/ai";
import { BsFillLaptopFill } from "react-icons/bs";
import TransitionEffect from "@/components/TransitionEffect";
function page() {
  return (
    <>
      <TransitionEffect />
      <div className="max-w-screen-xl w-full mx-auto h-full my-6">
        <div className="flex justify-center mt-8">
          <AnimatedText className={"services_text_shadow"}>
            Services
          </AnimatedText>
        </div>

        <div className="w-full h-full flex gap-x-20 justify-center mt-14 flex-wrap gap-y-14">
          <motion.div
            className="bg-gradient-to-r from-purple-700 to-pink-700  w-[320px] h-[400px] py-6 px-10 rounded-2xl"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <BiSolidBriefcase size={40} color={"#67c0ce"} />
            <h1 className=" text-2xl text-light font-semibold mt-3 mb-4">
              What I can do for you
            </h1>
            <h2 className="text-light/60 text-md font-medium">
              Faster, better products that your users love. Here&apos;s all the
              services I provide:
            </h2>

            <ul className="pl-5 mt-5">
              <li className=" list-disc text-light text-base">
                Design Strategy
              </li>
              <li className=" list-disc text-light text-base">
                Web and Mobile App Design
              </li>
              <li className=" list-disc text-light text-base">
                Fullstack Web & Android Development
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-purple-700 to-pink-700  w-[320px] h-[400px] py-6 px-10 rounded-2xl"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <BsFillLaptopFill size={40} color={"#67c0ce"} />
            <h1 className=" text-2xl text-light font-semibold mt-3 mb-4">
              Skills I&apos;m fluent in
            </h1>
            <h2 className="text-light/60 text-md font-medium">
              Every designer needs the right skills to do the perfect job.
              Thankfully, I&apos;m multilingual.
            </h2>

            <ul className="pl-5 mt-5">
              <li className=" list-disc text-light text-base">
                Full Stack Development
              </li>
              <li className=" list-disc text-light text-base">
                Frontend Development
              </li>
              <li className=" list-disc text-light text-base">
                Backend Development
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-purple-700 to-pink-700  w-[320px] h-[400px] py-6 px-10 rounded-2xl"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <AiFillAlert size={40} color={"#67c0ce"} />
            <h1 className=" text-2xl text-light font-semibold mt-3 mb-4">
              What you can expect
            </h1>
            <h2 className="text-light/60 text-md font-medium">
              I design products that are more than pretty. I make them shippable
              and usable.
            </h2>

            <ul className="pl-5 mt-5">
              <li className=" list-disc text-light text-base">
                Clean and functional
              </li>
              <li className=" list-disc text-light text-base">
                Device and user friendly
              </li>
              <li className=" list-disc text-light text-base">
                Efficient and maintainable
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default page;
