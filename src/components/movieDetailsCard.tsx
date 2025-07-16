import { MovieObj } from "@/types"

type MovieDetailsCardProps = {
    movie: MovieObj;
}
export default function MovieDetailsCard({ movie }: MovieDetailsCardProps) {
    const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
    } = movie;

    const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : '/placeholder-movie.jpg';

    const backdropUrl = backdrop_path
        ? `https://image.tmdb.org/t/p/w780${backdrop_path}`
        : null;
    return (
        <section className="min-h-80 max-w-3xl">

        </section>
    )
}