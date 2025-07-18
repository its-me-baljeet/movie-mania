import MovieCard from "@/components/movieCard";
import { MovieObj } from "@/types"
import { getTopRatedMovies } from "@/utils/api"

export default async function TopRatedPage() {
    const topRatedMovies: MovieObj[] | null = await getTopRatedMovies();
    return (
        <section>
            <h2>Top Rated Movies</h2>
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