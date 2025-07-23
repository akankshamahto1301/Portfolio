"use client";

import Link from "next/link";
import Image from "next/image";
import { list } from "../portfolio/list";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { LinkPreview } from "@/components/ui/link-preview";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const Project = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 p-8 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
      </div>

      {/* Content container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-300 text-center mb-12 drop-shadow-md">
          My Projects
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {list.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              className="w-full sm:w-[28rem]"
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 p-5 h-full">
                  <Link href={`/portfolio/projects/${item.slug}`}>
                    <CardItem translateZ="80" className="w-full">
                      <Image
                        src={item.link}
                        alt="project thumbnail"
                        height={600}
                        width={1000}
                        className="rounded-lg h-60 w-full object-cover"
                      />
                    </CardItem>
                  </Link>

                  <CardItem
                    translateZ="40"
                    className="text-lg font-semibold mt-4 text-white"
                  >
                    {item.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="30"
                    className="text-sm text-white/80 mt-2"
                  >
                    {item.description}
                  </CardItem>

                  <div className="mt-6">
                    <LinkPreview url={item.projectLink}>
                      <Button className="w-full bg-pink-500 text-black hover:bg-pink-700 transition font-semibold cursor-pointer">
                        View Project
                      </Button>
                    </LinkPreview>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
