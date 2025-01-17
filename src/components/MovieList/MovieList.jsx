import s from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies, query }) => {
  // показує звідки ти прийшов
  const location = useLocation();

  let title;
  if (location.pathname === "/") {
    // Якщо на головній сторінці
    title = "Trending today";
  } else if (location.pathname === "/movies") {
    // Якщо на сторінці пошуку
    title =
      query && query.trim() !== ""
        ? `Search results for "${query}"`
        : "Search Movies";
  }

  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.moviesItem}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <img
                className={s.imgMovies}
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title}
              />
              <p className={s.movieParagraph}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
