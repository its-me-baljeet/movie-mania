import MovieCard from "@/components/movieCard";
import { MovieObj } from "@/types";
import { getPopularMovies } from "@/utils/api"

export default async function PopularPage() {
    const popularMovies: MovieObj[] = await getPopularMovies();
    return (
        <section className="p-5 flex flex-col gap-5">
            <h2 className="text-lg font-medium">Popular Movies</h2>
            <section className="grid sm:grid-cols-4 h-full w-full gap-5">
                {popularMovies && popularMovies.length > 0 ? (
                    popularMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    popularMovies && <p>No popular Movies found.</p>
                )}
            </section>
        </section>
    )
}