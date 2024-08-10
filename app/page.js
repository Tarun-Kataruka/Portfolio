import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import React from "react";
import Social from "@/components/Social";
import Photo from "@/components/Photo";

const Page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Tarun Kataruka</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90 text-2xl font-bold italic leading-snug tracking-wide text-center">
              <span className="block text-shadow-lg text-blue-300">
                "Dream big, code relentlessly, and turn your vision into
                reality."
              </span>
            </p>

            <p className="max-w-[600px] mb-10 text-white/90 text-lg leading-relaxed tracking-wide">
              As a dedicated full-stack developer currently pursuing my studies
              at DSCE Bangalore, I am passionate about technology and the art of
              creation. I thrive on turning innovative ideas into reality,
              constantly seeking to expand my knowledge and skills in the
              ever-evolving tech landscape. Beyond the world of coding, I find
              joy in reading, playing cricket and badminton, and exploring new
              horizons. My journey is driven by a love for learning and a
              commitment to crafting solutions that make a difference.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/Tarun-Kataruka_resume.pdf"
                download="Tarun_Kataruka_CV.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border borer-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
