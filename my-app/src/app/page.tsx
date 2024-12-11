"use client"
// import Image from "next/image";
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { mainBank } from "@/components/imagebank";

export default function Home() {
  return (
    <div>
      <div className="p-1 font-serif hover:font-sans">
        <div className="text-center">
          please do <b>drugs</b>. be like him
        </div>
      </div>
      <div className="flex justify-center">
        <Carousel className="w-6/12">
          <CarouselContent>
            {mainBank.map((image, index) => (
              <CarouselItem key={index}>
                <div key={index} className="flex justify-center">
                  <img key={index} src={image.url} alt={image.name} style={{height: '300px', width: 'auto'}}/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <br/>
      <div className="flex justify-center">
        <img src={"/assets/see_drugs.png"} alt={"See_drugs"} style={{height: '300px', width: 'auto'}}/>
      </div>
      
    </div>
  );
}
