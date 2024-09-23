"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
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
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
interface Product {
  name: string;
  // icon: React.ForwardRefExoticComponent<any>;
  color: string;
  points: string[];
}

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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
      name: "NOVALYS-L LYSINE HCl 98.5%",
      icon: Leaf,
      color: "bg-green-500",
      points: [
        "High purity: 98.5% Lysine HCl for maximum bioavailability.",
        "Supports muscle growth and protein utilization.",
        "Improves feed conversion efficiency.",
        "Enhances immune system performance.",
        "Suitable for poultry, cattle, swine, and aquaculture.",
      ],
    },
    {
      name: "NOVAMET - DL METHIONINE 99%",
      icon: Leaf,
      color: "bg-red-500",
      points: [
        "Purity: 99% DL-Methionine for superior absorption and effectiveness.",
        "Supports optimal growth, muscle development, and overall animal health.",
        "Improves feed conversion and reduces feed costs.",
        "Enhances liver function and antioxidant capacity.",
        "Ideal for poultry, cattle, swine, and aquaculture.",
      ],
    },
    {
      name: "NOVATHR-L THREONINE 98.5%",
      icon: Leaf,
      color: "bg-orange-500",
      points: [
        "High purity: 98.5% L-Threonine for optimal bioavailability.",
        "Supports protein synthesis and muscle development.",
        "Enhances immune system performance and gut health.",
        "Improves feed efficiency and overall animal performance.",
        "Suitable for use in poultry, swine, cattle, and aquaculture.",
      ],
    },
    {
      name: "NOVATRYP - L-TRYPTOPHAN 98%",
      icon: Leaf,
      color: "bg-yellow-500",
      points: [
        "Contains 98% pure L-Tryptophan for maximum bioavailability.",
        "Supports protein synthesis and muscle growth.",
        "Enhances stress resistance and improves animal behavior.",
        "Promotes better feed efficiency and overall performance.",
        "Ideal for use in poultry, swine, and cattle.",
      ],
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
              <h1 className="sm:text-4xl text-4xl md:text-7xl font-bold  mb-4">
                <div className="flex flex-col gap-y-2">
                  {/* Apply image background to the text */}
                  <span className="text-with-image">Best Quality Poultry</span>
                  <span className="text-with-image">Feed Supplements</span>
                </div>
              </h1>
              <p className="sm:text-xl text-base   max-w-4xl m-auto mb-8">
                Raising healthy animals limits the potential for disease spread
                supports farmers livelihoods, and provides nutrient-rich meat
                milk fish and eggs to nourish and support human health
              </p>
              <Link href="/products">
                <Button
                  className="sm:px-10  sm:text-xl sm:py-6"
                  variant="website"
                >
                  Explore Products
                </Button>
              </Link>
            </section>
            <style jsx>{`
              .text-with-image {
                background: url("/testimage.jpg") no-repeat center;
                background-size: cover;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `}</style>
          </AnimatedSection>
          <AnimatedSection>
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-center mb-8">
                What we have for you
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product.name}
                    className={`rounded-lg border shadow-lg overflow-hidden ${
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
                      <p className="mb-4">
                        Give the best to your animal with{" "}
                        {product.name.toLowerCase()} supplement.
                      </p>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            className="bg-primary-color-light hover:bg-secondry-color transition-colors"
                            onClick={() => setSelectedProduct(product)}
                          >
                            Learn More
                          </Button>
                        </AlertDialogTrigger>
                        {selectedProduct && (
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                {selectedProduct.name}
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                <ul className="list-disc ml-4">
                                  {selectedProduct.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                  ))}
                                </ul>
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <Button onClick={() => setSelectedProduct(null)}>
                                Close
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        )}
                      </AlertDialog>
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
                  <div className="flex  items-center justify-between">
                    <h1 className="text-3xl font-semibold">Amino acids</h1>
                    <p className="text-xs sm:hidden  flex items-center gap-x-2">
                      Swipe right <ArrowRight size={12} />
                    </p>
                  </div>
                  <SmallCrousel />
                </div>

                <div className="mt-10">
                  <div className="flex  items-center justify-between">
                    <h1 className="text-3xl font-semibold">Antibiotics</h1>
                    <p className="text-xs sm:hidden  flex items-center gap-x-2">
                      Swipe right <ArrowRight size={12} />
                    </p>
                  </div>

                  <MidClouser />
                </div>
                <div className="mt-10">
                  <div className="flex  items-center justify-between">
                    <h1 className="text-3xl font-semibold">Feed Supplements</h1>
                    <p className="text-xs sm:hidden  flex items-center gap-x-2">
                      Swipe right <ArrowRight size={12} />
                    </p>
                  </div>

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
