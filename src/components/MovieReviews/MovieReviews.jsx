// import s from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesReviews } from "../../apiService/movies";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    const getDataDetails = async () => {
      try {
        const reviewData = await getMoviesReviews(moviesId);
        console.log(reviewData);
        setReview(reviewData);
      } catch (error) {
        console.error(error.message);
      }
    };
    getDataDetails();
  }, [moviesId]);

  return (
    <div>
      <ul>
        {review.map((item) => (
          <li key={item.id}></li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
