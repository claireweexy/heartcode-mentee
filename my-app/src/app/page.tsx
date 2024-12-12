"use client"
// import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    category: "Purpose",
    title: "What is this website about?",
    src: "/assets/new_drug_addict.webp",
    content: ``,
  },
  {
    category: "Statistics",
    title: "Statistics on substance abuse",
    src: "/assets/new_drug_addict.webp",
    content: ``,
  },
  {
    category: "News",
    title: "Find out more about substance abuse.",
    src: "/assets/new_drug_addict.webp",
    content: ``,
  },
 
  {
    category: "Quotes",
    title: "Hear from past addicts",
    src: "/assets/new_drug_addict.webp",
    content: ``,
  },
];

export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div>
      <div className="p-6">
        <div className="text-2xl font-semibold">Substance Abuse</div>
        <div className="text-lg px-6">Do you know?</div>
        <div className="px-6">The Oxford definition of substance abuse: 
          <p className="px-6">The habit of taking too much harmful drugs or drinking too much alcohol</p>
        </div>
        <br />
        <div className="text-lg px-6">But do you know?</div>
        <div className="px-6">Abusing substances are more dangerous. They break families, ruin lives...</div>
      </div>
      <div className="p-6">
        <div className="text-2xl font-semibold">Victim Rememberance Day</div>
        <div className="px-6">In honour of the lives that were ruined due to drugs, Singapore has designated <b>every third of friday of May</b> each year as Drug Victims Rememberance Day...</div>
      </div>
      <div className="w-full h-full py-20">
        <h2 className="pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          More Information
        </h2>
        <Carousel items={cards} />
      </div>
      <br/>
      <div className="flex justify-center">
        <img src={"/assets/see_drugs.png"} alt={"See_drugs"} style={{height: '300px', width: 'auto'}}/>
      </div>
    </div>
  );
}
