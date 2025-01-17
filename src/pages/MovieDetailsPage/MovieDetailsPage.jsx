import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  // useNavigate,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../apiService/movies";
import s from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { moviesId } = useParams(); // Отримуємо id фільму з URL
  const [detailed, setDetailed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  const location = useLocation();

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
      {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
      {/*  // показує звідки ти прийшов, туди і йди */}
      <Link className={s.goBack} to={location.state}>
        Go Back
      </Link>
      <div className={s.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w400${detailed.poster_path}`}
          alt={detailed.title}
          className={s.movieDetailsImg}
        />
        <div className={s.information}>
          <h1>{detailed.title}</h1>
          <p>{detailed.overview}</p>
          <p>
            <strong>Release Date:</strong> {detailed.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {detailed.vote_count}
          </p>
        </div>
      </div>
      <div>
        <h2 className={s.movieDetailsPageTitle}>Additional Information</h2>
        <nav className={s.movieDetailsPageNav}>
          <ul className={s.movieDetailsPageList}>
            <li>
              <Link className={s.movieDetailsPageItem} to="review">
                Review
              </Link>
            </li>
            <li>
              <Link className={s.movieDetailsPageItem} to="cast">
                Cast
              </Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
