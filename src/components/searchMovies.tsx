import fetchMovies from "@/utils/api";
import { MovieObj, MovieResponse } from "@/types";
import MovieCard from "./movieCard";

type SearchMoviesProps = {
  searchParams?: Promise<{
    query?: string;
  }>;
}

export default async function SearchMovies({ searchParams }: SearchMoviesProps) {
  const params = await searchParams;
  const query = params?.query || "";
  const data: MovieResponse = await fetchMovies(query);

  console.log(data);

  if (!data || !data.results) {
    return <div>No results found.</div>;
  }

  return (
    <div>
      {data.results.map((movie: MovieObj) => (
        // <div key={movie.id}>{movie.title}</div>
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}