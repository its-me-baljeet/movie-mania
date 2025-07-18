
import { Clapperboard, Compass, Flame, Heart, Star, Telescope } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Sidebar() {
    return (
        <aside className="h-full w-full sm:col-span-2 border-r p-2 flex flex-col gap-5">
            <Link href={"/"}>
                <Button variant="link" className="cursor-pointer font-medium text-lg">
                    <Clapperboard />
                    Now Playing
                </Button>
            </Link>
            <Link href={"/search"}>
                <Button variant="link" className="cursor-pointer font-medium text-lg">
                    <Compass />

                    Browse
                </Button>
            </Link>
            <Link href={"/popular"}>
                <Button variant="link" className="cursor-pointer font-medium text-lg">
                    <Flame />
                    Popular
                </Button>
            </Link>
            <Link href={"/top-rated"}>
                <Button variant="link" className="cursor-pointer font-medium text-lg">
                    <Star />
                    Top Rated
                </Button>
            </Link>
            <Link href={"/upcoming"}>
                <Button variant="link" className="cursor-pointer font-medium text-lg">
                    <Telescope />
                    Upcoming
                </Button>
            </Link>
            <Link href={"/favorites"}>
                <Button variant="link" className="cursor-pointer font-medium text-lg">
                    <Heart />
                    Favorites
                </Button>
            </Link>
        </aside>
    )
}