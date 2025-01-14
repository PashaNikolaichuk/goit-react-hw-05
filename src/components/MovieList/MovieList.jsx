import s from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.moviesItem}>
            <Link to={`/movies/${movie.id}`}>
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
