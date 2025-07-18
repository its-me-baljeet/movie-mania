import MovieCard from "@/components/movieCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { searchMovies } from "@/utils/api";
import { MovieObj } from "@/types";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
    const query = searchParams.query;

    const results: MovieObj[] | null = query ? await searchMovies(query) : [];

    return (
        <div className="h-full w-full p-5 flex flex-col gap-5">
            This is Search Page

            <form className="flex gap-3">
                <Input
                    type="text"
                    name="query"
                    placeholder="Search for Movie..."
                    className="w-3xl"
                    defaultValue={query || ""}
                />
                <Button type="submit">Search</Button>
            </form>

            <section className="grid sm:grid-cols-4 h-full w-full gap-5">
                {results && results.length > 0 ? (
                    results.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    query && <p>No results found for "{query}".</p>
                )}
            </section>
        </div>
    );
}