"use client";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LinkPreview } from "@/components/ui/link-preview";



export const list = [
  {
    title: "AI-PDF Reader: ",
    description:
      "A full stack application built with Next.js, Tailwind CSS, LangChain, and Gemini API that allows users to upload and chat with PDFs using natural language.",
    link: "/images/pdfViewer.png",
    color: "#1B0A02",
    projectLink: "https://ai-pdf-reader-one.vercel.app/",
  },
  {
    title: "QuickSum: ",
    description:
      "AI-based summarization tool I developed using Next.js and Tailwind CSS. It takes long text input from users and instantly generates a short summary using Gemini AI.",
    link: "/images/summarizer.png",
    color: "#1A80DA",
    projectLink: "https://quicksum-three.vercel.app/",
  },
];

export default function QuickProjects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container}>
      <section className="text-white w-full">
        <h1 className="text-center text-black dark:text-white relative top-10 text-2xl md:text-4xl font-bold">
          Quick Projects
        </h1>

        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.projectLink}
              src={project.link}
              title={project.title}
              color={project.color}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </main>
  );
}

function Card({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative -top-[25%] md:h-[70%] h-max w-[90%] rounded-md md:p-10 p-4 origin-top"
      >
        <h2 className="text-2xl text-center font-bold">{title}</h2>
        <div className="flex h-full md:flex-row flex-col-reverse mt-5 gap-10">
          <div className="md:w-[40%] relative md:top-[10%] text-justify md:text-left">
            <p className="text-base md:text-lg">{description}</p>
            <span className="flex items-center gap-2 pt-2">
              <LinkPreview
                url={url}
                className="no-underline hover:underline hover:underline-offset-4 cursor-pointer mt-4"
              >
                <button
                  className={cn(
                    "relative flex gap-1 items-center overflow-hidden rounded-sm px-4 py-2 text-sm transition-colors duration-700 ease-out before:absolute before:-left-10 before:top-0 before:z-[-1] before:h-full before:w-[0%] before:skew-x-[45deg] before:transition-all before:delay-75 before:duration-700 before:content-[''] hover:before:w-[150%] focus:outline-none focus:ring-offset-1 focus:ring-offset-white focus:before:w-[150%] focus-visible:ring-2 dark:before:bg-black dark:focus:ring-black dark:focus:ring-offset-black hover:text-white text-black bg-white hover:bg-transparent",
                    "before:bg-black focus:ring-black"
                  )}
                  type="button"
                >
                  Visit {title.split(":")[0]}
                  <ArrowRight className="mt-1 ml-1" />
                </button>
              </LinkPreview>
            </span>
          </div>

          <div className="relative md:w-[80%] w-[100%] md:aspect-auto aspect-video md:h-full h-max rounded-lg overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={src}
                alt="project image"
                className="object-cover md:aspect-auto aspect-video"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
