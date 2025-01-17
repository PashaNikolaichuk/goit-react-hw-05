import { getMoviesSearch } from "../../apiService/movies";
import { Formik, Form, Field } from "formik";
import { useLocation, useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log(location);
  const [searchParams, setSearchParams] = useSearchParams();
  // 3 забираємо з URL
  const query = searchParams.get("query");

  useEffect(() => {
    // // Якщо параметр `query` порожній, нічого не робити.
    if (!query) return;
    const getMoviesNew = async () => {
      try {
        // 4 і передаємо для запиту
        const moviesNew = await getMoviesSearch(query);
        setMovies(moviesNew.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMoviesNew();
  }, [query]);

  // початкові значення полів
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, actions) => {
    // 1  отримаємо значення з форми
    const { query } = values;
    if (query.trim()) {
      // 2 записуємо в URL
      setSearchParams({ query });
      actions.resetForm();
    }
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.forma}>
          <Field
            type="text"
            name="query"
            className={s.formaInput}
            placeholder="Enter movie which you want find"
          />
          <button className={s.formaBtn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <MovieList movies={movies} query={query} />
    </div>
  );
};

export default MoviesPage;
