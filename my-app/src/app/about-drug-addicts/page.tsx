import Image from "next/image";
import Drug_Addict from "/assets/drug_addict.webp";
import Weed_Addict from "/assets/weed_addict.webp";
import See_Drugs from "/assets/see_drugs.png";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import New_Addict from "/assets/new_drug_addict.webp";

export default function DrugAddicts() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/assets/CRAC.jpg"
    }];
    // <div className="justify-center flex">
    //   <div className="text-center p-1 w-60 font-sans hover:font-serif hover:bg-sky-500">
    //     <div>
    //       I take cocaine every day
    //     </div>

    //     <div>
    //       it is rotting my soul
    //     </div>

    //     <Image src={Drug_Addict} height={500} alt="Drug Addict"/>
    //     <div>
    //       <p>Hover below</p>
    //       <p className="opacity-0 hover:opacity-100">Give me my drugs</p>
    //     </div>
    //   </div>

    //   <div className="text-center p-1 w-60 font-sans hover:font-serif hover:bg-green-500">
    //     <div>
    //       I smoke weed everyday
    //     </div>

    //     <div>
    //       it is  rotting my lungs
    //     </div>

    //     <Image src={Weed_Addict} height = {700} alt="Weed_Addict"/>
    //     <p>Hover below</p>
    //     <p className = "opacity-0 hover:opacity-100">AAAAAA</p>
    //   </div>
    // </div>
    return <div><AnimatedTestimonials testimonials={testimonials} /></div>;
}
