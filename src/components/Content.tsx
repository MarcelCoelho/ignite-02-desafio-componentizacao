import { useContext } from "react";
import { ContextoMovies } from "../context/ContextoMovies";
import { MovieCard } from "./MovieCard";

export function Content() {
  const { selectedGenre, movies } = useContext(ContextoMovies);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre?.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.Title}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
        </div>
      </main>
    </div>
  );
}
