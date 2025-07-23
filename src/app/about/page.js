"use client";
import React from "react";
import { Calendar, Code, GraduationCap } from "lucide-react";

const About = () => {
  const educationData = [
    {
      period: "2020 - 2024",
      degree: "B.Tech",
      institution: "Vellore Institute of Technology, Bhopal",
      field: "Electronics and Communication Engineering (AI and Cybernetics)",
    },
    {
      period: "2020",
      degree: "Class 12",
      institution: "Sri Chaitanya Techno School, Vizag",
    },
    {
      period: "2018",
      degree: "Class 10",
      institution: "S.E.Rly. M.H.S School, Chakradharpur, Jharkhand",
    },
  ];

  const skillsData = [
    { name: "JavaScript", percentage: 90 },
    { name: "TypeScript", percentage: 80 },
    { name: "React", percentage: 85 },
    { name: "Next.js", percentage: 80 },
    { name: "HTML", percentage: 95 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Node.js", percentage: 75 },
    { name: "MongoDB", percentage: 70 },
    { name: "Python", percentage: 60 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto mb-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          ABOUT <span className="text-pink-300">ME</span>
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          A self-motivated individual dedicated to my goals. I am passionate
          about exploring new paths that challenge me to sharpen my skills.
          I&apos;m an avid learner, always enthusiastic to embrace new
          opportunities and grow through experience.
        </p>

        <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
          The chance to apply my skills in a dynamic and innovative environment
          excites me. I&apos;m driven by curiosity and the desire to create
          meaningful impact wherever I go.
        </p>
      </section>

      {/* Education Section */}
      <section className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="h-8 w-8 text-pink-400" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-pink-400/30"></div>

          <div className="space-y-12 pl-10">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative group flex items-start gap-6"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-pink-400 rounded-full border-4 border-gray-900 group-hover:scale-110 transition-transform" />

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 w-full hover:border-pink-400/40 transition-all">
                  <div className="flex items-center gap-2 text-pink-400 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-gray-300 font-medium mb-1">
                    {item.institution}
                  </p>
                  <p className="text-gray-400">{item.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="h-8 w-8 text-pink-400" />
            <h2 className="text-3xl font-bold">MY SKILLS</h2>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-white">
              I&apos;m an avid learner
            </h3>
            <p className="text-gray-400">
              I continuously enhance my skills to stay ahead in technology and
              innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">
                    {skill.name}
                  </span>
                  <span className="font-bold text-pink-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-pink-400 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
