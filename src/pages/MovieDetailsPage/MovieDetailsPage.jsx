import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "../../apiService/movies";
import s from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { moviesId } = useParams(); // Отримуємо id фільму з URL
  const [detailed, setDetailed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getDataDetails = async () => {
      try {
        const movie = await getMovieDetails(moviesId);

        setDetailed(movie);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Для демонстрації лоадера
      } catch (error) {
        console.error("Error fetching movie details:", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getDataDetails();
  }, [moviesId]);

  if (isLoading) {
    return <Loader />;
  }

  if (!detailed) {
    return <p>Movie details not found.</p>;
  }

  return (
    <div className={s.MovieDetailsPage}>
      <div className={s.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w400${detailed.poster_path}`}
          alt={detailed.title}
          className={s.movieDetailsImg}
        />
        <div className={s.information}>
          <h1>{detailed.title}</h1>
          <p>{detailed.overview}</p>
          <p>Release Date: {detailed.release_date}</p>
          <p>Rating: {detailed.vote_count}</p>
        </div>
      </div>
      <div>
        <h2>Additional Information</h2>
        <nav>
          <ul>
            <li>
              <Link to="review">Review</Link>
            </li>
            <li>
              <Link to="cast">Cast</Link>
            </li>
          </ul>
        </nav>
        {/* для того де показувати інформацію */}
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
