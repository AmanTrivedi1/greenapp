"use client";
import React, { useState } from "react";
import { ThemeButton } from "./themeButton";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div>
        <header className="">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-bold text-primary-color-light">
                <img className="max-w-[100px]" src="/logo.png" alt="logo" />
              </span>
            </motion.div>
            <nav className="hidden md:flex space-x-6">
              {["Products", "About", "Blog", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className=" hover:text-primary-color-light transition-colors"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
            <motion.div
              className=""
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-x-2">
                <ThemeButton />
              </div>
            </motion.div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 " />
            </button>
          </div>
        </header>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed inset-y-0 min-h-screen right-0 w-64 bg-gradient-to-br from-green-50 to-blue-50 dark:bg-gradient-to-br dark:from-[#0C0A09] dark:to-[#0C0A09]/80  shadow-lg z-50 p-4"
            >
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6 " />
              </button>
              <nav className="flex flex-col   space-y-4 mt-12">
                {["Products", "About", "Blog", "Contact"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className=" hover:text-primary-color-light transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
