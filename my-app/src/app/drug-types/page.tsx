// import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    // DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { drugBank } from "@/components/imagebank";

export default function DrugTypes() {
    return (
        <div>
            <div className="text-center">
                <p className="text-3xl">✨💅🚬💉💊 Here are some drugs 💊💉🚬💅✨</p>
                <br/>
                <div className="flex justify-center">
                    <Carousel className="w-6/12">
                        <CarouselContent>
                            {drugBank.map((image, index) => (
                            <CarouselItem key={index}>
                                <div key={index} className="flex justify-center">
                                    <img key={index} src={image.url} alt={image.name} style={{height: '300px', width: 'auto'}}/>
                                </div>
                                <br/>
                                <div className="flex justify-center">
                                    <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" className="bg-slate-50 text-black	">More Info about {image.name}</Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                        <DialogTitle>More info about {image.name}</DialogTitle>
                                        <DialogDescription>
                                            {image.desc}
                                        </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                    </Dialog>
                                </div>
                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                
            </div>

            <br/>
            <div className="flex justify-center">
                <img src={"/assets/dont_take_drugs.png"} alt={"Dont_Take_Drugs"} style={{height: '300px', width: 'auto'}}/>
            </div>
        </div>
    );
}