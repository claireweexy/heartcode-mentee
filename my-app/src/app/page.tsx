"use client"
// import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    category: "Purpose",
    title: "What is this website about?",
    src: "/assets/web.jpg",
    content: ``,
  },
  {
    category: "Statistics",
    title: "Statistics on substance abuse",
    src: "/assets/stats.jpg",
    content: `
  Global Statistics:
- Global Drug Usage: Around 296 million people worldwide were reported to use drugs in 2021, which shows a 23% increase over the previous decade. The majority of the increase is attributed to population growth and changes in drug use patterns worldwide​.  
- Drug-Related Deaths: An estimated 585,000 deaths were attributed to drug use in 2021, primarily due to opioid use disorders. Synthetic opioids like fentanyl continue to be a leading cause of overdose deaths globally  
- CENTRAL NARCOTICS BUREAU
-Over 35 million people worldwide suffer from drug use disorders, yet only about 1 in 7 people receive the treatment they need. This gap in care highlights the global challenge of providing accessible, affordable, and effective rehabilitation services to those affected by substance abuse​
ADDICTION GROUP
​
UNODC



Local Drug Arrest Trends:
Methamphetamine remains the most commonly abused drug in Singapore, accounting for 52% of arrests in 2023.
Heroin follows at 33%, with cannabis accounting for 9% of arrests​
- CENTRAL NARCOTICS BUREAU
.
Youth Perceptions on Drugs:
A 2020 survey revealed 82.5% of youths aged 18–30 supported Singapore's zero-tolerance drug policy, compared to 88.3% of those above 30. This shows slightly lower support for anti-drug policies among younger demographics​
- ANNALS SINGAPORE
.
Mental Health and Substance Abuse:
Individuals with drug use issues in Singapore show higher rates of anxiety disorders, depression, and insomnia. This underscores the link between mental health struggles and substance abuse​
- ANNALS SINGAPORE
.`,
  },
  {
    category: "News",
    title: "Find out more about substance abuse.",
    src: "/assets/new.jpg",
    content: ``,
  },
 
  {
    category: "Quotes",
    title: "Hear from past addicts",
    src: "/assets/quo.jpg",
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
        <div className="text-2xl font-bold">Substance Abuse</div>
        <div className="text-lg px-6 font-semibold">Did you know?</div>
        <div className="text-lg px-6 font-semibold">The Oxford definition of substance abuse: 
          <p className="text-lg px-6 font-normal">"The habit of taking too much harmful drugs or drinking too much."
But substance abuse is so much more than a habit—it’s a force that devastates lives, tears families apart, and destroys futures.
It’s not just about the harm to one person; it’s about the ripples of pain, loss, and heartbreak that extend to everyone who loves them. Substance abuse doesn’t just break individuals—it breaks bonds, dreams, and hope.

</p></div></div>
      <div className="p-6">
        <div className="text-2xl font-semibold">Victim Rememberance Day</div>
        <div className="text-lg px-6">In honour of the lives that were ruined due to drugs, Singapore has designated <b>every third of friday of May</b> each year as Drug Victims Rememberance Day. This solemn day is dedicated to remembering individuals and families affected by substance abuse and fostering awareness about the importance of prevention, support, and recovery. It serves as a powerful reminder of the need for a collective effort to combat the harmful effects of drug addiction.</div>
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
