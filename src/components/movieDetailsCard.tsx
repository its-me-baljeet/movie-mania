'use client';

import { MovieObj } from "@/types";
import { Calendar, Star } from 'lucide-react';
import FavoriteButton from "./favoriteButton";

type MovieDetails = MovieObj & {
    genres?: { id: number; name: string }[];
    tagline?: string;
};

type MovieDetailsCardProps = {
    movie: MovieDetails;
}

export default function MovieDetailsCard({ movie }: MovieDetailsCardProps) {
    const {
        backdrop_path,
        genres,
        id,
        overview,
        poster_path,
        release_date,
        tagline,
        title,
        vote_average,
        vote_count
    } = movie;

    const posterUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://placehold.co/500x750/E5E7EB/4B5563?text=No+Poster';

    const backdropUrl = backdrop_path
        ? `https://image.tmdb.org/t/p/w1280${backdrop_path}`
        : null;

    return (
        <section className="w-full text-foreground dark:text-foreground-dark rounded-lg overflow-hidden shadow-2xl bg-background dark:bg-card-dark border">
            <div className="relative h-64 md:h-96 w-full">
                {backdropUrl ? (
                    <img
                        src={backdropUrl}
                        alt={`${title} backdrop`}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                ) : (
                    <div className="absolute top-0 left-0 w-full h-full bg-secondary"></div>
                )}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-card dark:from-card-dark via-card/80 dark:via-card-dark/80 to-transparent"></div>
            </div>
            <div className="relative p-6 md:p-8 -mt-48 md:-mt-56">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="flex-none mx-auto md:mx-0">
                        <img
                            src={posterUrl}
                            alt={`${title} poster`}
                            width={500}
                            height={750}
                            className="w-48 md:w-60 rounded-lg shadow-xl border-2 border-border"
                        />
                    </div>
                    <div className="flex-grow flex flex-col gap-4 text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
                        {tagline && <p className="text-lg italic text-muted-foreground -mt-2">{tagline}</p>}
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <Star className="w-4 h-4 text-primary" fill="currentColor" />
                                <span>{vote_average.toFixed(1)} ({vote_count.toLocaleString()} votes)</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <FavoriteButton movie={movie} />
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2">Overview</h2>
                            <p className="text-muted-foreground text-sm tracking-wider leading-relaxed">{overview}</p>
                        </div>
                        {genres && genres.length > 0 && (
                            <div>
                                <h2 className="text-xl font-semibold mb-2">Genres</h2>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                    {genres.map(genre => (
                                        <span key={genre.id} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-medium shadow-md border">
                                            {genre.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
