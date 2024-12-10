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

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"

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
                            <CarouselItem>
                                <div className="flex justify-center"><Image height={300} src={Crack} alt="Crack"/></div>
                                <div className="flex justify-center mt-2">
                                <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="bg-slate-50">More Info</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>More info about Crack</DialogTitle>
                                    <DialogDescription>
                                        Blah Blah Blah
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                                </Dialog>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex justify-center"><Image height={300} src={Fetanyl} alt="Fetanyl"/></div>
                                <div className="flex justify-center mt-2">
                                <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="bg-slate-50">More Info</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>More info about Fetanyl</DialogTitle>
                                    <DialogDescription>
                                        Blah Blah Blah
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                                </Dialog>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex justify-center"><Image height={300} src={Heroin} alt="Heroin"/></div>
                                <div className="flex justify-center mt-2">
                                <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="bg-slate-50">More Info</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>More info about Heroin</DialogTitle>
                                    <DialogDescription>
                                        Blah Blah Blah
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                                </Dialog>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex justify-center"><Image height={300} src={Meth} alt="Meth"/></div>
                                <div className="flex justify-center mt-2">
                                <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="bg-slate-50">More Info</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>More info about Meth</DialogTitle>
                                    <DialogDescription>
                                        Blah Blah Blah
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                                </Dialog>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex justify-center"><Image height={300} src={Pcp} alt="PCP"/></div>
                                <div className="flex justify-center mt-2">
                                <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="outline" className="bg-slate-50">More Info</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>More info about Pcp</DialogTitle>
                                    <DialogDescription>
                                        Blah Blah Blah
                                    </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                                </Dialog>
                                </div>
                            </CarouselItem>
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