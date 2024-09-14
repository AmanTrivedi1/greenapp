"use client";
import ProductCard from "@/components/ProductCard";
import React from "react";

const products = [
  {
    id: 1,
    title: "Product 1",
    imageUrl: "/sonam.jpg",
    details: [
      {
        heading: "High-Resolution Display",
        subheading: "6.7-inch Super Retina XDR",
        text: "The X12 features a large 6.7-inch display with OLED technology, offering stunning colors and deep blacks for a cinematic viewing experience.",
      },
      {
        heading: "Advanced Camera System",
        subheading: "48MP Triple-Lens",
        text: "Capture every moment in exceptional detail with the 48MP triple-camera system, featuring ultra-wide, wide, and telephoto lenses for versatile shooting.",
      },
    ],
  },
  {
    id: 2,
    title: "Product 2",
    imageUrl: "/sonam.jpg",
    details: [
      {
        heading: "Ultra-Thin Design",
        subheading: "Portable and Sleek",
        text: "The Z5 is engineered to be incredibly thin and lightweight, making it the perfect companion for professionals on the go.",
      },
      {
        heading: "All-Day Battery Life",
        subheading: "Up to 15 Hours",
        text: "With up to 15 hours of battery life on a single charge, the Z5 ensures that you stay productive all day long without needing to plug in.",
      },
    ],
  },
  {
    id: 3,
    title: "Product 3",
    imageUrl: "/sonam.jpg",
    details: [
      {
        heading: "Industry-Leading Noise Cancellation",
        subheading: "Block Out the World",
        text: "Experience true immersion with cutting-edge noise-cancelling technology that reduces ambient noise by up to 98%.",
      },
      {
        heading: "Custom Sound Profiles",
        subheading: "Tailored Audio Experience",
        text: "Fine-tune your audio experience with custom sound profiles that adjust the bass, treble, and mids to your liking.",
      },
    ],
  },
  {
    id: 4,
    title: "Product 4",
    imageUrl: "/sonam.jpg",
    details: [
      {
        heading: "Fitness Tracking",
        subheading: "Monitor Your Health",
        text: "Track your workouts, heart rate, sleep patterns, and more with the advanced health and fitness tracking features of the Series 9.",
      },
      {
        heading: "Always-On Display",
        subheading: "Bright and Clear",
        text: "The always-on display ensures that you can quickly glance at your notifications, time, and fitness stats without lifting your wrist.",
      },
    ],
  },
  {
    id: 5,
    title: "Product 5",
    imageUrl: "/sonam.jpg",
    details: [
      {
        heading: "4K Resolution",
        subheading: "Incredible Clarity",
        text: "Enjoy breathtaking picture quality with 4K Ultra HD resolution, bringing your favorite shows and movies to life in stunning detail.",
      },
      {
        heading: "Smart TV Features",
        subheading: "Streaming Made Easy",
        text: "Stream your favorite content from popular apps like Netflix, Hulu, and Disney+ with the TV's built-in smart features.",
      },
    ],
  },
  {
    id: 6,
    title: "Product 6",
    imageUrl: "/sonam.jpg",
    details: [
      {
        heading: "Next-Gen Graphics",
        subheading: "Ray Tracing and 4K Gaming",
        text: "Experience the next generation of gaming with support for 4K resolution and ray tracing, delivering hyper-realistic visuals.",
      },
      {
        heading: "High-Speed SSD",
        subheading: "Fast Load Times",
        text: "Load games in mere seconds thanks to the console's high-speed SSD, ensuring you spend less time waiting and more time playing.",
      },
    ],
  },
  {
    id: 7,
    title: "Product 7",
    imageUrl: "/sonam.jpg",
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
    imageUrl: "/sonam.jpg",
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
    imageUrl: "/sonam.jpg",
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
