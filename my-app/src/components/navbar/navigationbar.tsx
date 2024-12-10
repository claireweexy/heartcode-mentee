import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu";


import Link from "next/link";

export function NavigationBar() {
    return(
    <NavigationMenu className="flex flex-row justify-between min-w-full list-none h-16 sticky top-0">
        <div className="flex flex-row">
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/quiz" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Quiz
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/about-drug-addicts" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Drug Addicts
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </div>
    </NavigationMenu>
    )
}