import React from "react";
import profile from "../assets/profile.jpg";
import { HERO_CONTENT } from "../constants/index";
import { motion } from "framer-motion";

const ContainerVarients = {
  hidden:{ opacity : 0, x: -100},
  visible : {
    opacity : 1,
    x: 0,
    transition : {
      duration : 0.5,
      staggerChildren : 0.5,
    }
  }
}
const ChildVarients = {
  hidden : {opacity :0 , x: -100},
  visible : {opacity :1 , x: 0 , transition : {duration : 0.5}}
}

const Home = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              initial="hidden"
              animate="visible"
              variants={ContainerVarients}
              src={profile}
              alt="ashish photo"
              className="border border-stone-900 rounded-3xl"
              width={450}
              height={450}
              // inital={{x : 100, opacity: 0}}
              // animate={{x : 0, opacity: 1}}
              // transition={{ duration : 1 , delay : 1.5}}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={ContainerVarients}
            className="flex flex-col items-center lg:items-start mt-10">

            <motion.h2 
              variants={ChildVarients}
              className="pb-2 text-4xl tracking-tigher">
              Aashish Bishokarma
            </motion.h2>

            <motion.span 
              variants={ChildVarients}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text te t-3xl tracking-tight">
              Full Stack Developer
            </motion.span>

            <motion.p 
              variants={ChildVarients}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{HERO_CONTENT}</motion.p>

            <motion.a 
              variants={ChildVarients}
              href="https://drive.google.com/file/d/11kqBQxbiWgCztJR3BapqSdSFFIOjfTi7/view?usp=sharing"
              target='_blank'
              rel="noopener noreferrer"
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-black hover:text-white duration-300">
              Preview Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
