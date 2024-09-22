"use client";
import ProductCard from "@/components/ProductCard";
import React from "react";

const products = [
  {
    id: 1,
    title: "Novalys-L Lysine HCl 98.5%",
    imageUrl: "/product-1.jpeg",
    details: [
      {
        heading: "High-Quality Amino Acid",
        subheading: "Pharmaceutical Grade",
        text: "Novalys-L is a premium-grade Lysine HCl supplement, providing 98.5% pure L-Lysine hydrochloride. It is designed to enhance animal nutrition, promoting optimal growth and feed efficiency.",
      },
      {
        heading: "Versatile Applications",
        subheading: "Pharma, Food, and Animal Nutrition",
        text: "Lysine is an essential amino acid that plays a key role in protein synthesis, supporting muscle development, immune function, and overall health in poultry, swine, cattle, and aquaculture.",
      },
    ],
  },
  {
    id: 2,
    title: "Novamet - DL Methionine 99%",
    imageUrl: "/product-2.jpeg",
    details: [
      {
        heading: "Essential Amino Acid",
        subheading: "Crucial for Protein Synthesis",
        text: "Novamet is a high-quality DL-Methionine feed supplement with 99% purity, formulated to meet the essential amino acid requirements of poultry and livestock.",
      },
      {
        heading: "Wide-Ranging Industry Applications",
        subheading: "Animal Feed, Pharmaceuticals, and Food",
        text: "Novamet provides a reliable source of DL-Methionine to optimize the nutritional profile of your feed, ensuring your animals achieve their full growth potential and thrive in various farming conditions.",
      },
    ],
  },
  {
    id: 3,
    title: "Novathr-L Threonine 98.5%",
    imageUrl: "/product-3.jpeg",
    details: [
      {
        heading: "Essential Amino Acid",
        subheading: "Vital for Protein Structure",
        text: "Novathr-L is a top-grade Threonine supplement containing 98.5% pure L-Threonine, designed to meet the essential amino acid requirements of animals, particularly in poultry, swine, and cattle nutrition.",
      },
      {
        heading: "High-Quality Pharmaceutical Grade",
        subheading: "Guaranteed 98.5% Purity",
        text: "Novathr-L helps to balance amino acid profiles in feed formulations, ensuring better growth rates and health outcomes for livestock while contributing to cost-effective feed management.",
      },
    ],
  },
  {
    id: 4,
    title: "Novactc - Chlortetracycline 15%",
    imageUrl: "/product-4.jpeg",
    details: [
      {
        heading: "Broad-Spectrum Antibiotic",
        subheading: "Effective Against Various Bacteria",
        text: "Novactc is a potent feed-grade antibiotic containing 15% Chlortetracycline, designed to support animal health by controlling bacterial infections and improving feed efficiency. It is widely used in poultry, swine, and cattle to prevent and treat respiratory, gastrointestinal, and systemic bacterial diseases.",
      },
      {
        heading: "High-Efficacy Animal Health Solution",
        subheading: "Poultry, Livestock, and Aquaculture",
        text: "Novactc helps maintain a healthy livestock environment by reducing the risk of disease outbreaks, ensuring better growth performance, and increasing the overall productivity of your farm.",
      },
    ],
  },
  {
    id: 5,
    title: "Novatyl - Tylosin Phosphate 10%",
    imageUrl: "/product-5.jpeg",
    details: [
      {
        heading: "Antibacterial Agent",
        subheading: "Effective Against Gram-Positive Bacteria",
        text: "Novatyl is a specialized antibiotic feed additive containing 10% Tylosin Phosphate, formulated to target bacterial infections in livestock, particularly in poultry and swine. Tylosin is highly effective against respiratory and gastrointestinal infections caused by Gram-positive organisms, promoting healthier animals and improving feed efficiency.",
      },
      {
        heading: "Animal Health Solution",
        subheading: "Treatment and Prevention of Respiratory Infections",
        text: "Novatyl ensures a healthier livestock environment, leading to improved productivity and performance by controlling infections that can negatively impact animal growth and well-being.",
      },
    ],
  },
  {
    id: 6,
    title: "Novachc - Choline Chloride 60%",
    imageUrl: "/product-6.jpeg",
    details: [
      {
        heading: "Essential Nutrient",
        subheading: "Supports Liver Function and Metabolism",
        text: "Novachc is a high-quality feed supplement containing 60% Choline Chloride, essential for promoting healthy growth and liver function in livestock. Choline plays a critical role in fat metabolism, preventing liver diseases, and enhancing overall productivity in poultry, swine, and cattle.",
      },
      {
        heading: "Animal Nutrition Supplement",
        subheading: "Enhances Growth and Performance",
        text: "Novachc ensures your animals receive the necessary Choline supplementation for improved growth rates, liver function, and enhanced productivity, making it a vital addition to feed formulations.",
      },
    ],
  },
  {
    id: 7,
    title: "Product 7",
    imageUrl: "/dummy.png",
    details: [
      {
        heading: "Active Noise Cancellation",
        subheading: "Immersive Sound",
        text: "Block out distractions with active noise cancellation, allowing you to focus on your music, podcasts, or calls.",
      },
      {
        heading: "Long Battery Life",
        subheading: "Up to 24 Hours",
        text: "With up to 24 hours of battery life, the Wireless Earbuds Max keep you connected and entertained all day long.",
      },
    ],
  },
  {
    id: 8,
    title: "Product 8",
    imageUrl: "/dummy.png",
    details: [
      {
        heading: "Voice Assistant Integration",
        subheading: "Control with Your Voice",
        text: "Integrate with your preferred voice assistant, like Alexa or Google Assistant, to control your home with just your voice.",
      },
      {
        heading: "High-Fidelity Sound",
        subheading: "Crisp and Clear Audio",
        text: "Fill any room with rich, high-fidelity sound, perfect for listening to music, podcasts, or audiobooks.",
      },
    ],
  },
  {
    id: 9,
    title: "Product 9",
    imageUrl: "/dummy.png",
    details: [
      {
        heading: "Eco-Friendly Commute",
        subheading: "Reduce Your Carbon Footprint",
        text: "Travel in style while reducing your environmental impact with the eco-friendly Electric Bike E300, perfect for city commuting.",
      },
      {
        heading: "Long-Lasting Battery",
        subheading: "Up to 50 Miles Per Charge",
        text: "Ride up to 50 miles on a single charge with the E300’s long-lasting battery, making it ideal for longer trips.",
      },
    ],
  },
];

const ProductPage: React.FC = () => {
  return (
    <div className="max-w-[1300px] m-auto">
      <div className="space-y-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
