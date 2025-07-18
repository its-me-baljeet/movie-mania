import MovieCard from "@/components/movieCard";
import { NowPlayingResponse } from "@/types";
import { getNowPlayingMovies } from "@/utils/api";
import { Grid } from "@radix-ui/themes";

export default async function Home() {
  const data: NowPlayingResponse = await getNowPlayingMovies();
  const results = data.results;
  return (
    <section className="grid sm:grid-cols-4 justify-center items-center h-full w-full gap-5 p-5">
      {
        results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })
      }
    </section>
  );
}