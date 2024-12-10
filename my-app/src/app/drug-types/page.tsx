import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

import Crack from "@/app/assets/CRAC.jpg";
import Fetanyl from "@/app/assets/FANTANYL.jpg";
import Heroin from "@/app/assets/heroin1.webp";
import Meth from "@/app/assets/METH1.avif";
import Pcp from "@/app/assets/PCP1.webp";
import Dont_Take_Drugs from "@/app/assets/dont_take_drugs.png";

export default function Home() {
    const words = [""]
    return (
        <div>
            <div className="text-center">
                <p className="text-3xl">✨💅🚬💉💊 Here are some drugs 💊💉🚬💅✨</p>
                <br/>
                <div className="flex justify-center">
                    <Carousel className="w-6/12">
                        <CarouselContent>
                            <CarouselItem><div className="flex justify-center"><Image height={300} src={Crack} alt="Crack"/></div></CarouselItem>
                            <CarouselItem><div className="flex justify-center"><Image height={300} src={Fetanyl} alt="Fetanyl"/></div></CarouselItem>
                            <CarouselItem><div className="flex justify-center"><Image height={300} src={Heroin} alt="Heroin"/></div></CarouselItem>
                            <CarouselItem><div className="flex justify-center"><Image height={300} src={Meth} alt="Meth"/></div></CarouselItem>
                            <CarouselItem><div className="flex justify-center"><Image height={300} src={Pcp} alt="PCP"/></div></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                
            </div>

            <br/>
            <div className="flex justify-center">
                <Image height={400} src={Dont_Take_Drugs} alt="That feeling when you don't take drugs"/>
            </div>
        </div>
    );
}