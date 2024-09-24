"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link"; 

// Sample data structure
const bgiCarouselData = [
  {
    id: 1,
    name: "NOVARK VET HEALTH INC.",
    subheading: "NOVATIAM - TIAMULIN HYDROGEN FUMRATE 10%",
    image: "/product-novatiam.jpeg",
  },
  {
    id: 2,
    name: "NOVARK VET HEALTH INC.",
    subheading: "NOVATOXIN - TOXIN BINDER",
    image: "/product-toxin.jpeg",
  },
];

export default function BigCrousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Carousel className="">
      <CarouselContent>
        {bgiCarouselData.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Link href="/products" passHref>
                <Card
                  className="relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <CardContent className="p-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                    {hoveredId === item.id && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center transition-opacity duration-300">
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-white text-lg font-semibold">
                            {item.name}
                          </span>
                          <p className="text-white text-center">{item.subheading}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
