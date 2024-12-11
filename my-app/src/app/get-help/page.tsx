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
                <div className="text-3xl px-80 flex justify-center">
                    {"Addiction is not something that should be faced in silence. If you or someone you care about is struggling with the difficult journey of overcoming drug addiction, it's crucial to reach out for support. You're not alone in this fight—there are trusted friends, family, and professionals who want to help you. Remember, seeking help is a sign of strength, not weakness. No matter how dark it may seem, there is always hope, and recovery is possible. There is light at the end of the tunnel, and you deserve to find it."}
                </div>
                <br/>
                
            </div>
        </div>
    );
}