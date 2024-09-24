"use clinent";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

// Sample data structure
const SmallCarouselData = [
  {
    id: 1,
    name: "NOVARK VET HEALTH INC.",
    subheading: "NOVALYS-L LYSINE HCl 98.5%",
    image: "/product-1.jpeg",
  },
  {
    id: 2,
    name: "NOVARK VET HEALTH INC.",
    subheading: "NOVAMET - DL METHIONINE 99%",
    image: "/product-2.jpeg",
  },
  {
    id: 3,
    name: "NOVARK VET HEALTH INC.",
    subheading: "NOVATHR-L THREONINE 98.5%",
    image: "/product-3.jpeg",
  },
  {
    id: 4,
    name: "NOVARK VET HEALTH INC.",
    subheading: "NOVATRYP - L-TRYPTOPHAN 98%",
    image: "/product-tryptophan.jpeg",
  },
];

export default function SmallCrousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Carousel className="">
      <CarouselContent>
        {SmallCarouselData.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Link href="/products" passHref>
                <Card
                  className="relative overflow-hidden"
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
                      <div className="absolute inset-0  bg-black bg-opacity-50 flex items-end justify-center  transition-opacity duration-300">
                        <div className="flex  flex-col items-center justify-center">
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
      <div className="sm:block hidden">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
