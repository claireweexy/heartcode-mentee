"use client"
import Image from "next/image";
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { mainBank, drugBank } from "@/components/imagebank";

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
              <CarouselItem>
                <div className="flex justify-center">
                  <img key={index} src={image.url} alt={image.name} style={{height: '300px', width: 'auto'}}/>
                </div>
              </CarouselItem>
            ))}
            {/* <CarouselItem><div className="flex justify-center"><Image height={300} src={Healthy_Man} alt="Healthy man"/></div></CarouselItem>
            <CarouselItem><div className="flex justify-center"><Image height={300} src={Drug} alt="drug"/></div></CarouselItem>
            <CarouselItem><div><div className="flex justify-center"><Image height={300} src={New_Drug_Addict} alt="new drug addict"/></div><span className="flex justify-center font-extrabold text-3xl">if you wanna die</span></div></CarouselItem> */}
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
