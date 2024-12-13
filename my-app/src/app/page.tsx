"use client"
// import Image from "next/image";
import React, { useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    category: "Purpose",
    title: "What is this website about?",
    src: "/assets/web.jpg",
    content: `This website was created to educate the public of the dangers of drug abuse. Not only does it affect the user's health, it also affects their relationships. If you or your loved ones are struggling with addiction, this website can provide more information and helplines. You are not alone.`,
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
- Over 35 million people worldwide suffer from drug use disorders, yet only about 1 in 7 people receive the treatment they need. This gap in care highlights the global challenge of providing accessible, affordable, and effective rehabilitation services to those affected by substance abuse​
- ADDICTION GROUP




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
    content: `Different kinds of drugs affect your body in different long and short term ways. Depending on the drug taken, you could become more susceptible to infectious diseases, make you agitated and aggressive, cause anxiety, confusion, paranoia, psychosis, cause a seizure, stroke, heart attack or even lead to death.`,
  },
 
  {
    category: "Quotes",
    title: "Hear from past addicts",
    src: "/assets/quo.jpg",
    content: `“If you can quit for a day, you can quit for a lifetime.”

~ Benjamin Alire Sáenz
“One of the hardest things was learning that I was worth recovery.”

~ Benjamin Alire Sáenz
“You can’t defeat the darkness by keeping it caged inside of you.”

~ Seth Adam Smith
“Life doesn’t get easier or more forgiving; we get stronger and more resilient.”

~ Steve Maraboli
“I avoid looking forward or backward, and try to keep looking upward.”

~ Charlotte Brontë
“That which does not kill us makes us stronger.”

`,
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
However, substance abuse is so much more than a habit—it’s a force that devastates lives, tears families apart, and destroys futures.
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
