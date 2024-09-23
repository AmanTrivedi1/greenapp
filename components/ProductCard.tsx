" use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; 

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    imageUrl: string;
    details: {
      heading: string;
      subheading: string;
      text: string;
    }[];
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4">
      <motion.div
        className="flex flex-col md:flex-row gap-6 snap-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
       
        <div className="w-full dark:bg-background  md:w-1/2 sticky top-0 h-auto">
          <motion.h2 className="text-3xl font-bold mb-4" variants={fadeInUp}>
            {product.title}
          </motion.h2>
          <motion.div
            className="relative w-full h-64 md:h-96"
            variants={fadeInUp}
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg  shadow-lg"
            />
          </motion.div>
        </div>

    
        <motion.div
          className="w-full md:w-1/2 mt-10 space-y-6 overflow-y-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {product.details.map((detail, index) => (
            <motion.div
              key={index}
              className="p-4 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold">{detail.heading}</h3>
              <h4 className="text-lg">{detail.subheading}</h4>
              <p className="text-md mt-2">{detail.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
