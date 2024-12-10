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
import Cocaine from "@/app/assets/cocaine_bags.jpg";
import {Button, buttonVariants} from "@/components/ui/button";
import useSound from "use-sound";

export default function Home() {
  return (
    <div className="flex justify-center bg-repeat" style={{backgroundImage: `url("${Cocaine}")`}}>
      <div className="text-center p-1 w-60 font-serif hover:font-sans hover:bg-sky-100">
        <div>
          please do <b>drugs</b>
        </div>
        <hr></hr>
        <div>
          <b>OK!</b>
        </div>
      </div>
      <div>
        <Carousel className="w-80">
          <CarouselContent>
            <CarouselItem><Image src={Healthy_Man} height={300} alt="Healthy man"/></CarouselItem>
            <CarouselItem><Image src={Drug} height={300} alt="drug"/></CarouselItem>
            <CarouselItem><Image src={New_Drug_Addict} height={300} alt="new drug addict"/><div className="font-extrabold text-6xl">HE HE HA HA!!</div></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
