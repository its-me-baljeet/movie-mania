import Link from "next/link";
import { ModeToggle } from "./modeToggle";

export default function Header() {
    return (
        <div className="h-15 w-full border-b flex justify-between items-center px-5">
            <Link href={"/"} className="text-2xl font-medium tracking-tighter text-primary">
                Movie Mania
            </Link>
            <ModeToggle />
        </div>
    )
}