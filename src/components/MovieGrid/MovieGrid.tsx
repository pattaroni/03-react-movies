import type { Movie } from "../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  //   onSelect: (id: number) => void;
  movies: Movie[];
}
// onClick={() => onSelect(movie.id)}
export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <>
      <ul className={css.grid}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className={css.card}>
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
