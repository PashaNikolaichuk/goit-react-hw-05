import { NavLink, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import clsx from "clsx";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const App = () => {
  return (
    <div>
      {/* перехід */}
      <nav className={s.navLink}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
      {/* адреса */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="review" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
