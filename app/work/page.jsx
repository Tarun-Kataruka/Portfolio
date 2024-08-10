"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkSlider from "@components/workSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    categoty: "frontend",
    title: "Restaurant WebApp",
    description:
      "Welcome to The Three BroomSticks Inn! This project is a simple and elegant web application designed to enhance the dining experience by allowing users to view the menu, book a table, and contact the restaurant easily. This webapp is both responsive and user-friendly.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
      { name: "BootStrap" },
    ],
    image: "/images/restro.png",
    live: "https://three-broomsticks.vercel.app",
    github: "https://github.com/Tarun-Kataruka/ThreeBroomSticksInn",
  },
  {
    num: "02",
    categoty: "Full Stack",
    title: "Sharkbucks",
    description:
      "Sharkbucks is a cutting-edge auction platform designed to unite investors and SMEs seamlessly. Our platform offers investors easy access to pitches and a plethora of resources, empowering them to bid on loan tenures, interest amounts, and capital, all while competing with other investors. With our finely-tuned Machine Learning model, we ensure that SMEs are matched with investors whose preferences align, optimizing the investment process. For SMEs, Sharkbucks offers unparalleled access to competitive loan offers, facilitating easy access to much-needed funds.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Firebase" },
      { name: "React.js" },
      { name: "JavaScript" },
      { name: "Python" },
    ],
    image: "/images/sharkbucks.jpeg",
    live: "https://sharktank-chi.vercel.app",
    github: "https://github.com/Tarun-Kataruka/Sharkbucks",
  },
  {
    num: "03",
    categoty: "MERN Stack",
    title: "Ecommerce WebApp",
    description:
      "Welcome to FindYourKick, an innovative e-commerce web application developed using React.js, Node.js, Express.js and JavaScript, designed to provide a seamless shopping experience for fashion enthusiasts. Our platform offers a diverse range of products across three main categories, ensuring that every customer finds their perfect pair.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/images/ecommece.png",
    live: "https://find-your-kick.vercel.app",
    github: "https://github.com/Tarun-Kataruka/FindYourKick",
  },
  {
    num: "04",
    categoty: "MERN Stack",
    title: "Hostel Management System",
    description:
      "The Hostel Management System is a comprehensive solution designed to facilitate the efficient management of hostel operations. This system caters to the needs of hostel administrators and residents by offering a range of functionalities that simplify daily tasks and enhance the overall living experience.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/images/hostel.jpg",
    live: "",
    github: "https://github.com/Tarun-Kataruka/Hostel-Management",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.categoty} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} passHref>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Live</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} passHref>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Github Repository</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              navigation
              pagination={{ clickable: true }} // Optional: Add pagination if needed
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group">
                    {project.image && (
                      <Image
                        src={project.image}
                        layout="fill"
                        objectFit="cover"
                        className="absolute top-0 left-0 w-full h-full"
                        alt={project.title}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/30 z-10"></div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlider
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
