import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

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
                    {"Addiction is not something that should be faced in silence. If you or someone you care about is struggling with the difficult journey of overcoming drug addiction, it's crucial to reach out for support. You're not alone in this fight—there are trusted friends, family, and professionals who want to help you. Remember, seeking help is a sign of strength, not weakness. No matter how dark it may seem, there is always hope, and recovery is possible. There is light at the end of the tunnel, and you deserve to find it. There is a link to IMH home page to find professional help if needed"}
                </div>
                <div className="text-3xl px-80 flex justify-center">
                    <br />
                    {" IMH Hotline: 6389 2222 "}
                </div>
                <br/>
                <div className="h-auto">
                    <img src={"/assets/therapist.png"} alt={"therapist"} style={{height: 'auto', width: '100%'}}/>
                </div>
                <div className="w-40 fixed bottom-0 right-0 m-6">
                    <div className="text-3xl font-bold">
                        Resources
                    </div>
                    <Link legacyBehavior href="https://wecare.org.sg/addiction-drug.php">
                        <a target="_blank" rel="noopener noreferrer">We Care</a>
                    </Link>
                    <br/>
                    <Link legacyBehavior href="https://addictionsrecovery.sg/services">
                        <a target="_blank" rel="noopener noreferrer">Addictions Recovery</a>
                    </Link>
                    <br/>
                    <Link legacyBehavior href="https://imh.com.sg/Clinical-Services/Specialised-Services/Pages/Addictions-Management.aspx">
                        <a target="_blank" rel="noopener noreferrer">Institute of Mental Health</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}