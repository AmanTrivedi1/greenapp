"use clinent";
import { PhoneCall, Linkedin } from "lucide-react";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1300px] m-auto">
      <footer className="  py-12">
        <div className="container mx-auto px-4">
          <div className="flex  sm:flex-row flex-col gap-y-4 justify-between">
            <div className="sm:w-64 ">
              <h3 className="text-xl font-semibold mb-4">About Novark</h3>
              <p className="text-gray-400">
                Empowering healthier lives through premium nutrition and
                wellness solutions.
              </p>
            </div>
            <div className="sm:w-64 w-full">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/products" className=" ">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/about" className="">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* <Link href="https://www.google.com/">
                  <Instagram />
                </Link>
                <Link href="https://www.google.com/">
                  <Facebook />
                </Link> */}
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/novark-vethealth-inc/about/"
                >
                  <Linkedin />
                </Link>
                <Link
                  href="https://wa.me/32466910778?text=Hello%20Novark%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneCall />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t  mt-8 pt-8 text-center">
            <p className="">
              Copyright 2024. All Rights Reserved by NOVARK VET HEALTH INC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
