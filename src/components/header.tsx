import Link from "next/link";
import LogoutBtn from "./logoutBtn";
import { ModeToggle } from "./modeToggle";

export default function Header() {
    return (
        <div className="h-15 w-full border-b flex justify-between items-center px-5">
            <Link href={"/"} className="text-2xl font-medium tracking-tighter text-foreground dark:text-foreground-dark">
                Movie Mania
            </Link>
            <div className="flex gap-5">
                <Link href={"/login"}>
                    <LogoutBtn />
                </Link>
                <ModeToggle />
            </div>
        </div>
    )
}