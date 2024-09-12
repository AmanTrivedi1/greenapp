import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample data structure
const bgiCarouselData = [
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
  {
    id: 4,
    name: "NOVARK VET HEALTH INC.",
    subheading: "TIAMULIN HYDROGEN FUMARATE 10%",
    image: "/big4.jpg",
  },
  {
    id: 5,
    name: "NOVARK VET HEALTH INC.",
    subheading: "CHOLINE CHLORIDE-60%",
    image: "/big5.jpg",
  },
  {
    id: 6,
    name: "NOVARK VET HEALTH INC.",
    subheading: "L-TRYPTOPHAN 98.5%",
    image: "/big6.jpg",
  },
  {
    id: 7,
    name: "NOVARK VET HEALTH INC.",
    subheading: "L -THREONINE 58.5% - INOTHRE",
    image: "/big7.jpg",
  },
  {
    id: 8,
    name: "NOVARK VET HEALTH INC.",
    subheading: "TOXIN BINDER - NOVATOXIN",
    image: "/big8.jpg",
  },
  {
    id: 9,
    name: "NOVARK VET HEALTH INC.",
    subheading: "LYSINE HCL - 98.5%",
    image: "/big9.jpg",
  },
  {
    id: 10,
    name: "NOVARK VET HEALTH INC.",
    subheading: "VITAMIN- E50% [FEED GRADE]",
    image: "/big10.jpg",
  },
];

export default function BigCrousel() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Carousel className="">
      <CarouselContent>
        {bgiCarouselData.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
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
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
