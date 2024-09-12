import { Facebook, Instagram, PhoneCall, Youtube } from "lucide-react";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="  py-12">
        <div className="container mx-auto px-4">
          <div className="flex  sm:flex-row flex-col gap-y-4 justify-between">
            <div className="sm:w-64 ">
              <h3 className="text-xl font-semibold mb-4">About NutriLife</h3>
              <p className="text-gray-400">
                Empowering healthier lives through premium nutrition and
                wellness solutions.
              </p>
            </div>
            <div className="sm:w-64 w-full">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className=" ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className=" ">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="https://www.google.com/">
                  <Instagram />
                </Link>
                <Link href="https://www.google.com/">
                  <Facebook />
                </Link>
                <Link href="https://www.google.com/">
                  <Youtube />
                </Link>
                <Link href="https://www.google.com/">
                  <PhoneCall/>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t  mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2023 NutriLife. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
