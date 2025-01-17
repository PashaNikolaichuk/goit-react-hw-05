import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCredits } from "../../apiService/movies";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getDataCast = async () => {
      try {
        const castData = await getMoviesCredits(moviesId);
        setCast(castData.cast);
        console.log(castData);
      } catch (error) {
        console.error(error.message);
      }
    };
    getDataCast();
  }, [moviesId]);

  return (
    <div>
      <ul className={s.movieCast}>
        {cast.length > 0 ? (
          cast.map((item) => (
            <li key={item.id} className={s.MovieCastList}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w400${item.profile_path}`
                    : "https://via.placeholder.com/400x600?text=No+Image"
                }
                alt={item.name}
              />
              <p>
                <strong>{item.name}</strong>
              </p>
              <p>Role: {item.character || "Not specified"}</p>
            </li>
          ))
        ) : (
          <p>No actors were found for this movie.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieCast;
