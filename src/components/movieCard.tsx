import { MovieObj } from "@/types";
import Image from "next/image";
import Link from 'next/link';

type MovieCardProps = {
    movie: MovieObj;
};

export default function MovieCard({ movie }: MovieCardProps) {
    const { id, title, poster_path, release_date } = movie;

    return (
        <Link href={`/movie/${id}`} className="h-full w-full cursor-pointer group">
            <div className="overflow-hidden rounded-lg shadow-md">
                <Image
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    width={500}
                    height={750}
                    className="block object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="mt-2">
                <p className="text-lg font-medium truncate">{title}</p>
                <p className="text-sm text-muted-foreground">{new Date(release_date).getFullYear()}</p>
            </div>
        </Link>
    );
}