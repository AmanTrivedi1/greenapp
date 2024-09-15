"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { MdOutlineHighQuality } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaFlask, FaPhone, FaTruck } from "react-icons/fa";
import { AnimatedSection } from "@/components/Animation";
import BigCrousel from "@/components/carousel/BigCrousel";
import AccordianSection from "@/components/AccordianSection";
import AchiveMentSection from "@/components/AchiveMentSection";
import SmallCrousel from "@/components/carousel/SmallCarousel";
import MidClouser from "@/components/carousel/MidCrousel";

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bestQuality.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + bestQuality.length) % bestQuality.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bestQuality = [
    {
      name: "Poultry Feed Supplements",
      description: "Electing the naturally best since 2008",
      image:
        "https://www.milkspecialties.com/wp-content/uploads/2022/01/animal-nutrition-hero-2.jpg",
    },
    {
      name: "Quality Products",
      description: "Best Quality Poultry Feed Supplements.",
      image:
        "https://www.indianchemicalnews.com/public/thumbs/news/2021/10/10905/animal-nut.jpg",
    },
  ];

  const products = [
    {
      name: "CHLORTETRACYCLINE - 15% - (FEED GRADE)",
      image: "MdOutlineHighQuality ",
      placeimage:
        "https://www.milkspecialties.com/wp-content/uploads/2022/01/animal-nutrition-hero-2.jpg",
      rating: 4.5,
      time: "30 days",
      difficulty: "Easy",
      servings: "60 capsules",
      icon: Leaf,
      color: "bg-green-500",
    },
    {
      name: "VITAMIN- E50% [FEED GRADE] NOVAVIT-E",
      image: "/placeholder.svg",
      placeimage:
        "https://www.indianchemicalnews.com/public/thumbs/news/2021/10/10905/animal-nut.jpg",
      rating: 4.8,
      time: "30 days",
      difficulty: "Medium",
      servings: "30 scoops",
      icon: Leaf,
      color: "bg-red-500",
    },
    {
      name: "L-TRYPTOPHAN 98.5% (FEED GRADE)",
      image: "/placeholder.svg",
      placeimage:
        "https://www.dsm-firmenich.com/corporate/businesses/animal-nutrition-health/_jcr_content/root/responsivegrid/container_copy_copy_.coreimg.82.1280.jpeg/1682948276088/banner-anh.jpeg",
      rating: 4.7,
      time: "60 days",
      difficulty: "Easy",
      servings: "120 softgels",
      icon: Leaf,
      color: "bg-orange-500",
    },
    {
      name: "L -THREONINE 58.5% - INOTHRE (FEED GRADE)",
      image: "/placeholder.svg",
      placeimage:
        "https://s7g10.scene7.com/is/image/kerry/farmer-feeding-chicken?ts=1653859676408&dpr=off&$HERO-PRIMARY-Small$",
      rating: 4.7,
      time: "60 days",
      difficulty: "Easy",
      servings: "120 softgels",
      icon: Leaf,
      color: "bg-yellow-500",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="max-w-[1300px] m-auto">
      <div className="min-h-screen ">
        <main className="container mx-auto px-4 ">
          <AnimatedSection>
            <section className="text-center sm:mt-20 md:mt-16 mt-10 mb-16">
              <h1 className="sm:text-4xl text-3xl md:text-6xl font-bold  mb-4">
                <div className="flex flex-col gap-y-2">
                  <span className="">Best Quality Poultry</span>
                  <span>Feed Supplements</span>
                </div>
              </h1>
              <p className="sm:text-xl text-base   max-w-4xl m-auto mb-8">
                Raising healthy animals limits the potential for disease spread
                supports farmers livelihoods, and provides nutrient-rich meat
                milk fish and eggs to nourish and support human health
              </p>
              <Button
                className="sm:px-10  sm:text-xl sm:py-6"
                variant="website"
              >
                Explore Products
              </Button>
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-center  mb-8">
                What we have for you
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    className={` rounded-lg border shadow-lg overflow-hidden ${
                      index === activeProduct
                        ? "ring-4 ring-primary-color-light"
                        : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`${product.color} p-6 flex justify-center`}>
                      <product.icon className="w-16 h-16 " />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {product.name}
                      </h3>
                      <p className=" mb-4">
                        Give a best to your animal with
                        {product.name.toLowerCase()} supplement.
                      </p>
                      <Button className="bg-primary-color-light hover:bg-secondry-color  transition-colors">
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </main>
      </div>

      <div className="dark:bg-[#0C0A09]  min-h-screen">
        <main className="">
          <AnimatedSection>
            <div className=" px-4  mb-8 rounded-lg  ">
              <div className="relative ">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {bestQuality.map((bestQuality, index) => (
                      <Card key={index} className="flex-shrink-0 w-full">
                        <CardContent className="flex items-center p-6">
                          <img
                            src={bestQuality.image}
                            alt={bestQuality.name}
                            className="w-24 rounded-lg h-24 mr-6"
                          />
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              {bestQuality.name}
                            </h3>
                            <p className="">{bestQuality.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2  rounded-full px-2 shadow-md"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2  rounded-full p-2 shadow-md"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection>
              <div className="p-4 sm:mt-20">
                <div>
                  <p className="text-primary-color-light text-xl ">
                    Animal Health Products
                  </p>
                </div>

                <div className="mt-10">
                  <h1 className="text-3xl font-semibold">Amino acids</h1>
                  <SmallCrousel />
                </div>

                <div className="mt-10">
                  <h1 className="text-3xl font-semibold">Antibiotics</h1>
                  <MidClouser />
                </div>
                <div className="mt-10">
                  <h1 className="text-3xl font-semibold">Feed Supplements</h1>
                  <BigCrousel />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Our Awesome Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: <MdOutlineHighQuality />,
                      title: "Quality Ingredients",
                      description:
                        "We use only the highest quality, scientifically-backed ingredients in our formulations.",
                    },
                    {
                      icon: <FaFlask />,
                      title: "Advanced Formulas",
                      description:
                        "Our supplements are designed by nutrition experts for maximum effectiveness.",
                    },
                    {
                      icon: <FaTruck />,
                      title: "Fast Shipping",
                      description:
                        "Get your supplements delivered quickly with our efficient shipping process.",
                    },
                    {
                      icon: <FaPhone />,
                      title: "Expert Support",
                      description:
                        "Our team of nutrition experts is always ready to answer your questions.",
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      className="rounded-lg border shadow-md p-6 text-center"
                      whileHover={{ scale: 1.05 }}
                      {...fadeInUp}
                    >
                      <div className="w-16 h-16 border border-secondry-color bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="text-3xl dark:text-black ">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p>{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div>
              <AccordianSection />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="sm:my-10">
              <AchiveMentSection />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <section className="bg-primary-color-light rounded-lg py-16">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Ready to Start Your Wellness Journey?
                </h2>
                <p className="text-xl text-white mb-8">
                  Join thousands of satisfied customers who have transformed
                  their health with NutriLife supplements.
                </p>
                <button className="  px-8 py-3 rounded-full text-lg font-semibold dark:text-black bg-gray-100 transition duration-300">
                  Get Started Today
                </button>
              </div>
            </section>
          </AnimatedSection>
        </main>
      </div>
    </div>
  );
}
