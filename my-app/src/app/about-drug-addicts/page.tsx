import Image from "next/image";
import Drug_Addict from "@/app/assets/drug_addict.webp";
import Weed_Addict from "@/app/assets/weed_addict.webp";

export default function Home() {
  return (
    <div className="justify-center flex">
      <div className="text-center p-1 w-60 font-sans hover:font-serif hover:bg-sky-100">
        <div>
          I take cocaine every day
        </div>

        <div>
          it is rotting my soul
        </div>

        <Image src={Drug_Addict} height={500} alt="Drug Addict"/>
        <div>
          <p>Hover below</p>
          <p className="opacity-0 hover:opacity-100">Give me my drugs</p>
        </div>
      </div>

      <div className="text-center p-1 w-60 font-sans hover:font-serif hover:bg-green-100">
        <div>
          I smoke weed everyday
        </div>

        <div>
          it is  rotting my lungs
        </div>

        <Image src={Weed_Addict} height = {700} alt="Weed_Addict"/>
        <p>Hover below</p>
        <p className = "opacity-0 hover:opacity-100">AAAAAA</p>
      </div>
    </div>
  );
}
