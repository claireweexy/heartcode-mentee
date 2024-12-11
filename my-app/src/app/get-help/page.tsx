import { FlipWords } from "@/components/ui/flip-words";

export default function GetHelp() {
    const words: string[] = ["should not be abused", "are addictive", "are dangerous", "ruin lives", "break families", "kill"]
    return (
        <div>
            <div className="text-center">
                <div className="text-6xl">
                    Drugs <FlipWords words={words}/>
                </div>
                
                <br/>
                Overcoming drug addiction is an uphill battle and you will not have to conquer it alone.
                <br/>
                
            </div>
        </div>
    );
}