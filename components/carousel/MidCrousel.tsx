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
const MidCarouselData = [
  {
    id: 1,
    name: "NOVARK VET HEALTH INC.",
    subheading: "LYSINE HCL-98.5%",
    image: "/big1.jpg",
  },
  {
    id: 2,
    name: "NOVARK VET HEALTH INC.",
    subheading: "VITAMIN-E 50%",
    image: "/big2.jpg",
  },
  {
    id: 3,
    name: "NOVARK VET HEALTH INC.",
    subheading: "TYLOSIN PHOSPHATE 10%",
    image: "/big3.jpg",
  },
];

export default function MidClouser() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Carousel className="">
      <CarouselContent>
        {MidCarouselData.map((item) => (
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
                          <p className="text-white">{item.subheading}</p>
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
