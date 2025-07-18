import MovieDetailsCard from "@/components/movieDetailsCard";
import { getMovieDetailsById } from "@/utils/api";

export default async function MovieDetailsPage({ params }: { params: { id: string } }) {
    const movieId = params.id;

    const movieDetails = await getMovieDetailsById(Number(movieId));

    if (!movieDetails) {
        return <div>Movie not found.</div>;
    }

    return (
        <div className="p-4 md:p-8">
            <MovieDetailsCard movie={movieDetails} />
        </div>
    );
}