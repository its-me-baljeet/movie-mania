import MovieCard from "@/components/movieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchMovies } from "@/utils/api";
import { MovieObj } from "@/types";
import { Search } from "lucide-react";
import { Suspense } from "react";

export default function SearchPage({ searchParams }: { searchParams: { query: string } }) {
    const query = searchParams.query;

    return (
        <div className="h-full w-full p-5 flex flex-col gap-5">

            <form className="flex gap-3 w-full justify-center">
                <Input
                    type="text"
                    name="query"
                    placeholder="Search for Movie..."
                    className="w-2xl"
                    defaultValue={query || ""}
                />
                <Button type="submit" className="text-white cursor-pointer"><Search /></Button>
            </form>
            <Suspense fallback={<p>Loading...</p>}>
                <GetSearchResults searchParams={searchParams} />
            </Suspense>

        </div>
    );
}

export async function GetSearchResults({ searchParams }: { searchParams: { query: string } }) {

    const query = searchParams.query;

    const results: MovieObj[] | null = query ? await searchMovies(query) : [];
    return (
        <section className="grid sm:grid-cols-4 h-full w-full gap-5 p-5">
            {results && results.length > 0 ? (
                results.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            ) : (
                query && <p>No results found for "{query}".</p>
            )}
        </section>
    )
}