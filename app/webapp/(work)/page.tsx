"use clinent";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const data = [
  {
    image: "/08.png",
    heading: "Heading 1",
    subheading: "Subheading 1",
  },
  {
    image: "/08.png",
    heading: "Heading 2",
    subheading: "Subheading 2",
  },
  {
    image: "/08.png",
    heading: "Heading 1",
    subheading: "Subheading 1",
  },
  {
    image: "/08.png",
    heading: "Heading 2",
    subheading: "Subheading 2",
  },
];

export function WorkPage() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent className="">
        {data.map((item, index) => (
          <CarouselItem key={index} className="w-1/2">
             <div className="border border-red-500 w-full">
               <img src={item.image} alt={item.heading} />
             </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
