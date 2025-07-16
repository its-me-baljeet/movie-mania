import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import { Flame } from "lucide-react";
import { Suspense } from "react";
import SearchMovies from "./searchMovies";

export default function Filters({ searchParams }: {
    searchParams?: Promise<{
        query?: string;
    }>;
}) {
    return (
        <aside className="h-full w-full sm:col-span-2 border-r p-5 flex flex-col gap-5">
            <Button variant="solid" className="w-full">Now Playing
                <Flame />
            </Button>
            <Button variant="solid" className="w-full">Popular
                <Flame />
            </Button>
            <Button variant="solid" className="w-full">Top Rated
                <Flame />
            </Button>
            <Button variant="solid" className="w-full">Upcoming
                <Flame />
            </Button>
            <Button variant="solid" className="w-full">Favorites
                <Flame />
            </Button>
        </aside>
    )
}