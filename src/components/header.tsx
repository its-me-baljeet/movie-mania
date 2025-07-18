import Link from "next/link";
import { ModeToggle } from "./modeToggle";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";

export default function Header() {
    return (
        <div className="h-15 w-full border-b flex justify-between items-center px-5">
            <Link href={"/"} className="text-2xl font-medium tracking-tighter text-primary">
                Movie Mania
            </Link>
            <div className="flex gap-5">
                <Link href={"/login"}>
                    <Button variant="default" className="text-white cursor-pointer">
                        <LogIn />
                        Login
                    </Button>
                </Link>
                <ModeToggle />
            </div>
        </div>
    )
}