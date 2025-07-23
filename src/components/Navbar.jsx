"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  ChevronsLeftRight,
  MessageCircle,
  NotebookText,
} from "lucide-react";
import Link from "next/link";

const navigationItems = [
  { name: "HOME", href: "/", icon: Home },
  { name: "ABOUT", href: "/about", icon: User },
  { name: "PROJECT", href: "/project", icon: ChevronsLeftRight },
  { name: "CONTACT", href: "/contact", icon: MessageCircle },
  { name: "RESUME", href: "https://drive.google.com/file/d/1qTxJjrqDqb88baFoWoVDL60PxBVxwRdR/view?usp=sharing", 
    icon: NotebookText },
];

function NavLinks({ onClick }) {
  const pathname = usePathname();
  return (
    <ul className="space-y-1">
      {navigationItems.map((item, index) => {
        const Icon = item.icon;
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        return (
          <motion.li
            key={item.name}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          >
            <Link
              href={item.href}
              className={`flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-200 group ${
                isActive ? "text-pink-400" : "text-gray-300"
              }`}
              onClick={onClick}
            >
              <motion.div
                className={isActive ? "text-pink-400" : "text-gray-400"}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Icon size={20} />
              </motion.div>
              <motion.span
                className={`font-medium text-sm tracking-wide transition-all duration-200 group-hover:text-pink-400 ${
                  isActive ? "text-pink-400" : "text-gray-300"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {item.name}
              </motion.span>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default function HamburgerNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <div className="fixed top-6 left-6 z-50">
        <motion.button
          className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </motion.button>
      </div>

      {/* Sidebar Panel Only, No Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 z-40 pointer-events-auto"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              opacity: { duration: 0.2 },
            }}
            style={{ boxShadow: "8px 0 32px 0 rgba(0,0,0,0.25)" }}
          >
            <div className="h-screen w-64 bg-gray-900 shadow-2xl rounded-r-3xl relative">
              {/* Close Button */}
              <div className="absolute top-6 right-6">
                <motion.button
                  className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <nav className="pt-20 px-4">
                <NavLinks onClick={closeMenu} />
              </nav>

              {/* Bottom Decoration */}
              <div className="absolute bottom-6 left-4 right-4">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
