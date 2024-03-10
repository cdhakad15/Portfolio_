"use client";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons/GitHubIcon";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
const projects = [
  {
    name: "MERN ESTATE ",
    type: "Fullstack (MERN) Project",
    description:
      "MERN Estate is a comprehensive real estate management system designed to streamline property listing, buying, selling, and renting processes.",
    github: "https://github.com/cdhakad15/mern-estate",
    live: "https://mern-estate-o1wl.onrender.com/",
    img: "/images/projects/project1.png",
  },
  {
    name: "EDTECH PLATEFORM",
    type: "Fullstach Web Application",
    description:
      "Created an EdTech Web Application using the MERN     (MongoDB,Express,React,Node.js) technology stack. This platform  enables users to access online education classes.",
    github: "https://github.com/cdhakad15/Studynotion-megaproject",
    live: "https://studynotion-megaproject.vercel.app/",
    img: "/images/projects/project2.png",
  },
  // {
  //   name: "E-Commerce Website",
  //   type: "Fullstack (MERN) Project",
  //   description:
  //     "This is an E-commerce project built using the MERN stack (MongoDB, Express, React, Node.js, Redux). The project includes a backend server, a front-end client, and a database.",
  //   github: "https://github.com/SumitM28/E-Commerce-App",
  //   live: "",
  //   img: "/images/projects/ecommerce.png",
  // },
  {
    name: "Sensor Dashboard",
    type: "Web Application",
    description:
      "This is just a project which used to visualize data from dht11 sensor Project made using Express Server, My SQL and React ",
    github: "https://github.com/cdhakad15/Sensor-Dashboard",
    live: "",
    img: "/images/projects/project4.png",
  },
  {
    name: "Portfolio",
    type: "Frontend Project",
    description:
      "Our frontend portfolio project showcases our creativity and technical skills in web development, featuring clean design and intuitive user experience. Through responsive layouts and interactive elements, we aim to impress and engage visitors with our work.",
    github: "https://github.com/cdhakad15/Portfolio",
    live: "https://65ed75b39184314558d5e4b2--serene-kringle-028521.netlify.app/",
    img: "/images/projects/project5.png",
  },
 
];

export default function page() {
  return (
    <>
      <TransitionEffect />
      <div className="max-w-screen-xl w-full mx-auto h-full px-4 sm:px-6 ">
        <div className="flex justify-center mt-8">
          <AnimatedText className={"project_text_shadow"}>
            Projects
          </AnimatedText>
        </div>

        <div className="flex flex-col gap-16 my-24">
          {projects?.map((project, i) => (
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className={
                i % 2 === 0
                  ? "w-full flex-col md:w-[70%] md:flex-row h-full rounded-xl p-5 gap-4  flex bg-dark/10 dark:bg-light/10 "
                  : "w-full flex-col md:w-[70%] md:flex-row h-full rounded-xl p-5 gap-4  flex ml-auto bg-dark/10  dark:bg-light/10 "
              }
              key={i}
            >
              <div
                className={
                  i % 2 === 0
                    ? "w-full md:w-[50%] h-[200px] md:h-[350px]"
                    : "w-full md:w-[50%] h-[500px] md:h-[350px]"
                }
              >
                <Image
                  src={project.img}
                  alt=""
                  width={400}
                  height={350}
                  className="w-full h-full object-contain hover:scale-110 transition-all cursor-pointer"
                />
              </div>
              <div className="w-full md:w-[50%] border-red-600 md:px-6 flex flex-col justify-center">
                <h1 className="text-xl font-semibold text-dark dark:text-light">
                  {project.name}
                </h1>
                <h2 className="text-base font-semibold text-[#bc67ce] mb-3">
                  {project.type}
                </h2>
                <p className="text-sm text-dark/75 font-medium dark:text-light/75">
                  {project.description}
                </p>
                <div className="flex mt-8 gap-4">
                  <Link
                    href={project.github}
                    className="w-8 hover:scale-110 transition-all dark:bg-light rounded-full"
                    target="_blank"
                  >
                    <GithubIcon />
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      className="w-8 bg-dark rounded-full p-1 hover:scale-110 transition-all dark:bg-light"
                      target="_blank"
                    >
                      <Image
                        src={"/images/projects/preview.png"}
                        width={12}
                        height={12}
                        className="w-full"
                        alt=""
                      />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
