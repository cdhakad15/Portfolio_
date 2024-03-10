import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const programmingSkills = [

  {
    name: "JavaScript",
    img: "/images/skills/js.png",
  },
  {
    name: "TypeScript",
    img: "/images/skills/typescript.png",
  },
  {
    name: "Python",
    img: "/images/skills/python.png",
  },
  {
    name: "Java",
    img: "/images/skills/java-logo-1.png",
  },
];

const frontendSkills = [
  {
    name: "HTML",
    img: "/images/skills/html-5.png",
  },
  {
    name: "CSS",
    img: "/images/skills/css-3.png",
  },

  {
    name: "Bootstrap",
    img: "/images/skills/bootstrap.png",
  },
  {
    name: "Tailwind CSS",
    img: "/images/skills/tailwind.webp",
  },
  {
    name: "ReactJs",
    img: "/images/skills/react.png",
  },
  {
    name: "NextJs",
    img: "/images/skills/nextjs.png",
  },
  
  {
    name: "Redux",
    img: "/images/skills/redux.png",
  },
];

const backendSkills = [
  {
    name: "NodeJs",
    img: "/images/skills/node-js.png",
  },
  {
    name: "ExpressJs",
    img: "/images/skills/node-js.png",
  },
 
];

const databaseSkills = [
  {
    name: "MongoDB",
    img: "/images/skills/mongodb.png",
  },
  {
    name: "Firebase",
    img: "/images/skills/firebase.png",
  },
];
const skills = [
  {
    name: "Git",
    img: "/images/skills/git.png",
  },
  {
    name: "GitHub",
    img: "/images/skills/github.png",
  },
  {
    name: "AWS DevOps",
    img: "/images/skills/aws.png",
  },
  {
    name: "VSCode",
    img: "/images/skills/vscode.png",
  },
  {
    name: "Linux",
    img: "/images/skills/linux.512x512.png",
  },
];

function Skills() {
  return (
    <motion.div
      className="w-full h-full flex gap-x-20 justify-center mt-14 flex-wrap gap-y-14"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="  bg-gradient-to-r from-purple-700 to-pink-700  w-[320px] h-[400px] py-6 px-10 rounded-2xl">
        <h1 className="text-light font-semibold text-xl ">
          PROGRAMMING LANGUAGES:
        </h1>
        <div className="mt-2 flex flex-col gap-1">
          {programmingSkills.map((skill, idx) => (
            <div className="flex gap-2 items-center" key={idx}>
              <p className="text-base text-light">{idx + 1}.</p>
              <Image
                src={skill.img}
                alt=""
                width={20}
                height={20}
                className=" object-contain"
              />
              <p className="text-base text-light">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-gradient-to-r from-purple-700 to-pink-700 w-[320px] h-[400px] py-6 px-10 rounded-2xl">
        <h1 className="text-light font-semibold text-xl ">
          Frontend Technologies:
        </h1>
        <div className="mt-2 flex flex-col gap-1">
          {frontendSkills.map((skill, idx) => (
            <div className="flex gap-2 items-center" key={idx}>
              <p className="text-base text-light">{idx + 1}.</p>
              <Image
                src={skill.img}
                alt=""
                width={20}
                height={20}
                className=" object-contain"
              />
              <p className="text-base text-light">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="  bg-gradient-to-r from-purple-700 to-pink-700  w-[320px] h-[400px] py-6 px-10 rounded-2xl">
        <h1 className="text-light font-semibold text-xl ">
          Backend Technologies:
        </h1>
        <div className="mt-2 flex flex-col gap-1">
          {backendSkills.map((skill, idx) => (
            <div className="flex gap-2 items-center" key={idx}>
              <p className="text-base text-light">{idx + 1}.</p>
              <Image
                src={skill.img}
                alt=""
                width={20}
                height={20}
                className=" object-contain"
              />
              <p className="text-base text-light">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="  bg-gradient-to-r from-purple-700 to-pink-700  w-[320px] h-[400px] py-6 px-10 rounded-2xl">
        <h1 className="text-light font-semibold text-xl ">Databases:</h1>
        <div className="mt-2 flex flex-col gap-1">
          {databaseSkills.map((skill, idx) => (
            <div className="flex gap-2 items-center" key={idx}>
              <p className="text-base text-light">{idx + 1}.</p>
              <Image
                src={skill.img}
                alt=""
                width={20}
                height={20}
                className=" object-contain"
              />
              <p className="text-base text-light">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="  bg-gradient-to-r from-purple-700 to-pink-700  w-[320px] h-[400px] py-6 px-10 rounded-2xl">
        <h1 className="text-light font-semibold text-xl ">Other:</h1>
        <div className="mt-2 flex flex-col gap-1">
          {skills.map((skill, idx) => (
            <div className="flex gap-2 items-center" key={idx}>
              <p className="text-base text-light">{idx + 1}.</p>
              <Image
                src={skill.img}
                alt=""
                width={20}
                height={20}
                className=" object-contain"
              />
              <p className="text-base text-light">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
