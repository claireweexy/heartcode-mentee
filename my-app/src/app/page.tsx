"use client"
import Image from "next/image";
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Healthy_Man from "@/app/assets/healthy_man.jpg";
import Drug from "@/app/assets/drug.jpg";
import New_Drug_Addict from "@/app/assets/new_drug_addict.webp";
import {Button, buttonVariants} from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="text-center p-1 w-60 font-serif hover:font-sans hover:bg-sky-100">
        <div>
          please do <b>drugs</b>
        </div>
      </div>
      <div className="flex justify-center">
        <Carousel className="w-6/12">
          <CarouselContent>
            <CarouselItem><Image height={300} src={Healthy_Man} alt="Healthy man"/></CarouselItem>
            <CarouselItem><Image height={300} src={Drug} alt="drug"/></CarouselItem>
            <CarouselItem><Image height={300} src={New_Drug_Addict} alt="new drug addict"/><div className="font-extrabold text-3xl">(if you wanna die)</div></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
