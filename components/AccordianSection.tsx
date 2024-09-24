"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordianSection = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
//Just changed
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      let start = 0;
      const end = 1050;
      const duration = 2000; 
      const incrementTime = Math.ceil(duration / end);

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [inView, controls]);

  return (
    <>
      <div className="flex flex-col md:flex-row mt-10 items-start p-4 gap-x-10 gap-y-6">
        <div className="w-full md:w-auto">
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden p-4">
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 -z-10 w-24 md:w-28 h-auto">
                <img
                  src="/22.png"
                  alt="leafimage"
                  className="w-full h-full object-contain"
                />
              </div>

              <img
                src="/1.jpg"
                alt="ProductImage"
                className="w-full rounded-lg  h-full"
              />
            </div>

            <motion.div
              className="absolute bg-secondry-color rounded-lg flex items-center gap-2 sm:px-6 sm:py-3 px-4 py-2 bottom-0 left-0 sm:-bottom-10 sm:-left-10 shadow-lg"
              initial="hidden"
              animate={controls}
              ref={ref}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8 },
                },
              }}
            >
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c0-2.21 1.79-4 4-4s4 1.79 4 4v4m0 0a4 4 0 11-8 0V8m-4 0a4 4 0 11-8 0v4m12 8v4m0-4a4 4 0 11-8 0v-4"
                  />
                </svg>
              </div>
              <div>
                <h1 className="sm:text-2xl text-base font-semibold">
                  {count}MT
                </h1>
                <p className="sm:text-base text-sm">Growth Capacity Per Day</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full md:w-[1000px] mt-8 max-w-full">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl text-primary-color-light">
              WHY TO CHOOSE NOVARK?
            </h1>
            <p className="text-xl md:text-3xl font-semibold mt-4">
              People don&apos;t buy what you do; they buy why you do it - Simon
              Sinek
            </p>
          </div>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="bg-secondry-color rounded-lg w-full">
                  <p className="text-start px-8 py-4 text-base md:text-lg text-black">
                    Trust
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-2 text-sm md:text-base">
                You put your faith in them. They do whatever they think,
                whenever. If you do not trust the organization, you would
                probably not do business with them anyway.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="bg-secondry-color rounded-lg w-full">
                  <p className="text-start px-8 py-4 text-base md:text-lg text-black">
                    Convenience
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-2 text-sm md:text-base">
                Who doesn&apos;t want an experience that&apos;s simple and
                without friction? And, if the service is good people are also
                willing to pay a higher price.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="bg-secondry-color rounded-lg w-full">
                  <p className="text-start px-8 py-4 text-base md:text-lg text-black">
                    Vision and Core Values
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="ml-2 text-sm md:text-base">
                You trust what they believe in. At some level this links with
                culture and values, but it&apos;s all about giving back and
                engaging the community. It can be a charity or some other cause
                that matters to you; everything from saving elephants to curing
                poverty in the world.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AccordianSection;
