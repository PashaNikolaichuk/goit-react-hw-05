import { useEffect, useState } from "react";
import { getMovies } from "../../apiService/movies";
import MoviesList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await getMovies();

        setMovies(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return <div>{isLoading ? <Loader /> : <MoviesList movies={movies} />}</div>;
};

export default HomePage;
