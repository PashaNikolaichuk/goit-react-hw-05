import { useEffect, useState } from "react";
import Forma from "../../components/Forma/Forma";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  const addNewMovies = (newMovies) => {
    setMovies((prev) => [...prev, newMovies]);
  };

  return (
    <div>
      <Forma addNewMovies={addNewMovies} />
    </div>
  );
};

export default MoviesPage;
