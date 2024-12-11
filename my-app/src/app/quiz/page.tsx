"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
 
const formSchema = z.object({
    q1: z.string({
        message: "Fill in an answer"
      }),
    q2: z.string({
      message: "Fill in an answer"
    })
  });

let q1:string;
let q2:string;
let q1Correct:boolean;
let q2Correct:boolean;

export default function Quiz() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        },
      })
  
      async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        q1 = values.q1;
        q2 = values.q2;
        q1Correct = q1 === "0";
        q2Correct = q2 === "0";
  
      }
    return (
        <div className="bg-[url('/assets/dont_take_drugs.png')] h-screen">
            <div className="bg-opacity-90 bg-white text-center">
                {"Drugs aren't good. They're not food."}
                <br/>
                
            </div>
            <div className="fixed bottom-0 left-0 border-black border-2">
                <img src={"/assets/subway_surfers.gif"} alt={"Subway Surfers"} style={{height: '300px', width: 'auto'}}/>
            </div>
            <div className="grid justify-center bg-opacity-90 bg-white mx-96 py-2 my-2">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                    control={form.control}
                    name="q1"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Question 1 <br/> What should you do if you see your friend abusing drugs?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>

                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Dropdown"/>
                            </SelectTrigger>
                            </FormControl>
                            
                            <SelectContent>
                            <SelectItem value="1">Take drugs with them</SelectItem>
                            <SelectItem value="2">Ask them for their dealer</SelectItem>
                            <SelectItem value="3">Encourage them to get help</SelectItem>
                            <SelectItem value="4">Cry</SelectItem>
                            </SelectContent>
                        
                        </Select>
                        {/* <FormDescription>
                            aaaaa
                        </FormDescription> */}
                        <FormMessage />
                        </FormItem>
                    )} />
                    <FormField
                    control={form.control}
                    name="q2"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Question 2 <br/> Which is not a name for ketamine?</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>

                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Dropdown"/>
                            </SelectTrigger>
                            </FormControl>
                            
                            <SelectContent>
                            <SelectItem value="1">Amino acid</SelectItem>
                            <SelectItem value="2">Green</SelectItem>
                            <SelectItem value="3">Blind Squid</SelectItem>
                            <SelectItem value="4">Vitamin K</SelectItem>
                            </SelectContent>
                        
                        </Select>
                        <FormMessage />

                        </FormItem>
                    )} />
                    <Button type="submit">Submit</Button>
                </form>
                </Form>
            </div>
            <div className="grid justify-center bg-opacity-90 bg-white mx-96 p-2">
                {
                q1 == "3"
                ? <p>Question 1: Correct!</p>
                : <p className="italic">Question 1: Wrong, you should encourage them to get help.</p>
                }
                {
                q2 == "1"
                ? <p>Question 2: Correct!</p>
                : <p className="italic">Question 2: Wrong, it is amino acid that is not a street name for ketamine.</p>
                }
            </div>
        </div>
    );
}