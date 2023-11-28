"use client";

import {
  Backend_skill,
  Frontend_skill,
  Languages,
  Other_skill,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
} from "@/utils/motions";
  
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="text-lg text-white my-3 max-w-[600px]"
      >
        <span className="text-2xl">
          Frontend
        </span>
      </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="text-lg text-white my-3 max-w-[600px]"
      >
        <span className="text-2xl">
          Backend
        </span>
      </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div> */}

      <motion.div
        variants={slideInFromLeft(0.8)}
        className="text-lg text-white my-3 max-w-[600px]"
      >
        <span className="text-2xl">
          Programming Languages
        </span>
      </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Languages.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      
      <motion.div
        variants={slideInFromLeft(0.8)}
        className="text-lg text-white my-3 max-w-[600px]"
      >
        <span className="text-2xl">
          Other
        </span>
      </motion.div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;