import { NavLink, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import clsx from "clsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
