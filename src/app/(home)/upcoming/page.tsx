import MovieCard from "@/components/movieCard";
import { MovieObj } from "@/types"
import { getUpcomingMovies } from "@/utils/api"

export default async function UpcomingPage() {
    const upcomingMovies: MovieObj[] | null = await getUpcomingMovies();
    return (
        <section>
            <h2>Upcoming Movies</h2>
            <section className="grid sm:grid-cols-4 h-full w-full gap-5">
                {upcomingMovies && upcomingMovies.length > 0 ? (
                    upcomingMovies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    upcomingMovies && <p>No Upcoming Movies found.</p>
                )}
            </section>
        </section>
    )
}