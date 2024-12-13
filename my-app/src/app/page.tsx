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
- **Global Statistics:**  
- Global Drug Usage: Around 296 million people worldwide were reported to use drugs in 2021, which shows a 23% increase over the previous decade. The majority of the increase is attributed to population growth and changes in drug use patterns worldwide​.  
- Drug-Related Deaths: An estimated 585,000 deaths were attributed to drug use in 2021, primarily due to opioid use disorders. Synthetic opioids like fentanyl continue to be a leading cause of overdose deaths globally  
- -CENTRAL NARCOTICS BUREAU  
- &#x200B;   
- Over 35 million people worldwide suffer from drug use disorders, yet only about 1 in 7 people receive the treatment they need. This gap in care highlights the global challenge of providing accessible, affordable, and effective rehabilitation services to those affected by substance abuse​
- -ADDICTION GROUP  
- &#x200B;  
- **Local Statistics:**  
- Local Drug Arrest Trends: Methamphetamine remains the most commonly abused drug in Singapore, accounting for 52% of arrests in 2023.
Heroin follows at 33%, with cannabis accounting for 9% of arrests​  
- -CENTRAL NARCOTICS BUREAU. 
- &#x200B;   
Youth Perceptions on Drugs:
A 2020 survey revealed 82.5% of youths aged 18–30 supported Singapore's zero-tolerance drug policy, compared to 88.3% of those above 30. This shows slightly lower support for anti-drug policies among younger demographics​
- ANNALS SINGAPORE
.
Mental Health and Substance Abuse:
Individuals with drug use issues in Singapore show higher rates of anxiety disorders, depression, and insomnia. This underscores the link between mental health struggles and substance abuse​
- -ANNALS SINGAPORE
.`,
  },
  {
    category: "News",
    title: "Find out more about substance abuse.",
    src: "/assets/new.jpg",
    content: `there are many real life cases of drug abuse, drug victims and drug dealing. Every single one of these cases are tragic and should not be overlooked. please feel free to read up on new with the links given. (press on the website names) [CNA](https://www.channelnewsasia.com/), [BBC](https://www.bbc.com/), [CNN](https://edition.cnn.com/)` 
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
  {
    category: "Legal",
    title: "Legislation",
    src: "/assets/laws.png",
    content: `The Misuse of Drugs Act (MDA): This is the primary law governing drug-related offenses in Singapore. It outlines penalties for the possession, trafficking, and consumption of controlled substances. Penalties are severe and can include long prison sentences, hefty fines, and even the death penalty for certain offenses.

Possession of Drugs: The possession of any illegal drug is a criminal offense, with penalties depending on the quantity of the drug found. Possession of even small amounts of drugs can lead to long prison terms, heavy fines, or both. For example, possessing more than 15g of heroin (or its equivalent) can result in a death sentence under the MDA.

Drug Trafficking: Drug trafficking is considered a serious crime. Any person found with drugs above specific thresholds can face the death penalty. For example, trafficking more than 15g of heroin or 30g of cocaine can lead to capital punishment.

Death Penalty for Major Drug Offenses: Singapore applies the death penalty for serious drug-related offenses, particularly for trafficking large quantities of illegal drugs. In recent years, the country has been criticized by human rights organizations for maintaining this policy.

Compulsory Drug Testing: The Singapore government conducts random and mandatory drug tests on individuals suspected of drug abuse. If someone tests positive for drugs, they can face a mandatory rehabilitation program.

Rehabilitation and Treatment: For those found guilty of drug abuse, Singapore provides compulsory rehabilitation programs. The government operates the Institute of Mental Health (IMH) and various rehabilitation centers. There are also rehabilitation programs for drug addicts who are not involved in trafficking but are still required to undergo treatment to help break their addiction.

The Death Penalty for Young Offenders: While the death penalty is available for those found trafficking drugs in significant amounts, certain offenders aged between 18 and 21 may still be eligible for a reduced sentence if they have shown remorse and the courts find that they were not fully aware of the consequences of their actions.

International Cooperation: Singapore actively cooperates with other countries in the fight against global drug trafficking and is a member of the International Narcotics Control Board (INCB).

Singapore has a zero-tolerance approach to drug use, and the country’s strict laws are enforced with very few exceptions. Those involved in drug trafficking face extreme penalties, and even those found guilty of consuming or possessing drugs face heavy sentences.

For more details on drug laws in Singapore, you can check government websites or the Misuse of Drugs Act documentation.`,
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
        <div className="text-lg px-6">In honour of the lives that were ruined due to drugs, Singapore has designated <b>every third of friday of May</b> each year as Drug Victims Rememberance Day. This solemn day is dedicated to remembering individuals and families affected by substance abuse and fostering awareness about the importance of prevention, support, and recovery. It serves as a powerful reminder of the need for a collective effort to combat the harmful effects of drug addiction. Click <a href="https://www.cnb.gov.sg/drug-victims-remembrance-day" className="underline" target="_blank">here </a>to find out more</div>
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
