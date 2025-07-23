"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { User, Play, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500 p-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/pic 1.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-pink-400/30 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-400 text-lg tracking-wider mb-4">
                HI THERE !
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold">
                I'M <span className="text-pink-800">Akanksha Mahto</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-300 text-lg leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Next.js Enthusiast and Crafting Engaging Interfaces
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link href="/contact">
                <motion.button
                  className="group relative inline-flex h-[56px] min-w-[200px] bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-pink-600 items-center justify-center rounded-full px-6 font-medium text-white gap-2 cursor-pointer"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
                >
                  <MessageCircle size={20} />
                  <span>CONTACT ME</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-6 left-6 text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <p>
          © Your Name | Design By <span className="text-pink-400">You</span>
        </p>
      </motion.footer>
    </div>
  );
}
