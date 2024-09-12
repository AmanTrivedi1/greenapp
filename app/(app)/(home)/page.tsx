"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Check } from "lucide-react";
import { MdOutlineHighQuality } from "react-icons/md";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { FaFlask, FaPhone, FaTruck } from "react-icons/fa";
import { AnimatedSection } from "@/components/Animation";
import AccordianSection from "./AccordianSection";
import BigCrousel from "./BigCrousel";
import AchiveMentSection from "./AchiveMentSection";

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      title: "Toxin Binder",
      content: "TOXIN BINDER NOVATOXIN (FEED GRADE)",
      image: "/toxinbinder.png",
    },
    {
      title: "Chlortetracycline",
      content: "Chlortetracycline- 15% NOVACTC (FEED GRADE)",
      image: "/chlor.png",
    },
    {
      title: "DLMENHIONINE 99%",
      content: "DLMENTHIONINE 99% NOVAMET (FEED GRADE)",
      image: "/Dlmet.png",
    },
    {
      title: "LYSINE HCL-98.5%",
      content: "LYSINE HCL-98.5% (FEED GRADE), Only for animal feed.",
      image: "/Lysin.png",
    },
    {
      title: "VITAMIN-E 50%",
      content: "[FEED GRADE] NOVAVIT-E [FEED GRADE), Only for animal feed.",
      image: "/vitamin.png",
    },
    {
      title: "TYLOSIN PHOSPHATE 10%",
      content: "NOVATYL-TYLOSIN PHOSPHATE 10%.",
      image: "/tylosin.png",
    },
    {
      title: "TIAMULIN HYDROGEN FUMARATE 10%",
      content: "TIAMULIN HYDROGEN FUMARATE 10%. (FEED GRADE) NOVATIAM.",
      image: "/tiamulin.png",
    },
    {
      title: "CHOLINE CHLORIDE-60%",
      content: "CHOLINE CHLORIDE-60% (FEED GRADE) - NOVACHC",
      image: "/choline.png",
    },
    {
      title: "L-TRYPTOPHAN 98.5%",
      content: "L-TRYPTOPHAN 98.5% NOVATRYP - (FEED GRADE).",
      image: "/ltryp.png",
    },
    {
      title: "LLTHREONINE 58.5%",
      content: "L LTHREONINE 58.5% NOVATHR (FEED GRADE.)",
      image: "/llthr.png",
    },
  ];

  const nextSlidee = () => {
    setStartIndex((prevIndex) => (prevIndex + visibleCards) % items.length);
  };

  const prevSlidee = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - visibleCards + items.length) % items.length
    );
  };

  const visibleItems = [
    ...items.slice(startIndex),
    ...items.slice(0, startIndex),
  ].slice(0, visibleCards);

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
    <div className="">
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
              <div className="">
                <h1 className="text-3xl font-semibold mb-4">
                  Best Quality Poultry Feed Supplements
                </h1>
                <p className=" mb-4">
                  NOVARK Group is a large manufacturer of Amino acids for
                  livestock and pets production and sales together. Besides it
                  is also one of the Top 50 Enterprises in Europe. The Company
                  was established in 2008 and restructured into INC.
                </p>
                <ul>
                  <li className="flex items-center gap-x-1">
                    <Check className="h-4 w-4 text-primary-color-light" />{" "}
                    LYSINE HCL - 98.5%
                  </li>
                  <li className="flex items-center gap-x-1">
                    <Check className="h-4 w-4 text-primary-color-light" />{" "}
                    VITAMIN- E 50%
                  </li>
                  <li className="flex items-center gap-x-1">
                    <Check className="h-4 w-4 text-primary-color-light" />{" "}
                    TYLOSIN PHOSPHATE 10%
                  </li>
                  <li className="flex items-center gap-x-1">
                    <Check className="h-4 w-4 text-primary-color-light" />{" "}
                    TIAMULIN HYDROGEN FUMARATE 10%
                  </li>
                  <li className="flex items-center gap-x-1">
                    <Check className="h-4 w-4 text-primary-color-light" />{" "}
                    CHOLINE CHLORIDE-60%
                  </li>
                </ul>
                <Button className="mt-4 bg-primary-color-light hover:bg-secondry-color ">
                  More about priducts
                </Button>
              </div>
              <div className="relative mt-8">
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

          <>
            <AnimatedSection>
              <div className="p-4 space-y-4 ">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-primary-color-light text-semibold text-2xl mb-2">
                      What we do
                    </h2>

                    <div className="mb-8">
                      <h1 className="text-3xl font-semibold mb-4">
                        Best Quality Poutry Feed Supplements Products
                      </h1>
                      <p className=" mb-4">
                        NOVARK VET HEALTH INC. is a global leader in animal
                        health dedicated to innovating and delivering products
                        and services to prevent and treat disease in farm
                        animals and pets creating value for farmers pet owners
                        veterinarians stakeholders and society as a whole.
                      </p>

                      <Button className="mt-4 bg-primary-color-light hover:bg-secondry-color ">
                        More about priducts
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-x-2 flex items-end">
                  <Button
                    onClick={prevSlidee}
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    onClick={nextSlidee}
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {visibleItems.map((item, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden transition-all duration-300 transform hover:scale-105"
                    >
                      <CardHeader className="bg-gradient-to-r from-primary-color  to-secondry-color p-4">
                        <CardTitle className=" text-center">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 flex items-center justify-center flex-col">
                        <div className="bg-primary-color-light w-40 h-40 rounded-full flex items-center justify-center">
                          <img
                            className="w-36 h-36 object-contain rounded-full "
                            src={item.image}
                            alt="image"
                          />
                        </div>
                        <div>
                          <p className="text-center text-sm mt-2">
                            {item.content}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </>

          <AnimatedSection>
            <div>
              <AccordianSection />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="p-4 sm:mt-20">
              <div>
                <p className="text-primary-color-light text-xl ">
                  Animal Health Products
                </p>
                <h1 className="text-3xl font-semibold">AMINOSz</h1>
              </div>
              <div className="mt-10">
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
          <AnimatedSection>
            <div className="sm:my-10">
              <AchiveMentSection />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <section className="bg-primary-color-light py-16">
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
