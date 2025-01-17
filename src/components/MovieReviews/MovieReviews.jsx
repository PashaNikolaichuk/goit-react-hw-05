import s from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../apiService/movies";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    const getDataDetails = async () => {
      try {
        const reviewData = await getMoviesReviews(moviesId);

        setReview(reviewData.results);
        console.log(reviewData.results);
      } catch (error) {
        console.error(error.message);
      }
    };
    getDataDetails();
  }, [moviesId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>There are no reviews for this movie.</p>
      ) : (
        <ul className={s.movieReviews}>
          {reviews.map((item) => (
            <li key={item.id}>
              <p>
                <strong>{item.author}</strong>
              </p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
