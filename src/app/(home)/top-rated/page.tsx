import MovieCard from "@/components/movieCard";
import { MovieObj } from "@/types"
import { getTopRatedMovies } from "@/utils/api"

export default async function TopRatedPage() {
    const topRatedMovies: MovieObj[] | null = await getTopRatedMovies();
    return (
        <section className="p-5 flex flex-col gap-5">
            <h2 className="text-lg font-medium">Top Rated Movies</h2>
            <section className="grid sm:grid-cols-4 h-full w-full gap-5">
                {topRatedMovies && topRatedMovies.length > 0 ? (
                    topRatedMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    topRatedMovies && <p>No Top Rated Movies found.</p>
                )}
            </section>
        </section>
    )
}