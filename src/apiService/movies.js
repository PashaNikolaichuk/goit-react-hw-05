import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDI0Y2VjYzVhMTdkYTgyYmRmMzg0MzU4N2JkMzFiYiIsIm5iZiI6MTczNjY5OTQ4My45MDYsInN1YiI6IjY3ODNlZTViOTRmYzg3ZWY0ODdiMGZkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q1co8PmBoPuy_xm9-lOL3cTMiffCsZCyhfc7SBqo53k";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;
axios.defaults.params = {
  language: "en-US",
};

export const getMovies = async () => {
  try {
    const { data } = await axios.get("/trending/movie/day");
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getMovieDetails = async (id) => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const getMoviesReviews = async (reviewsId) => {
  try {
    const { data } = await axios.get(`/movie/${reviewsId}/reviews`);
    return data;
  } catch (error) {
    console.error("Error reviews movie :", error);
    return null;
  }
};

export const getMoviesCredits = async (creditsId) => {
  try {
    const { data } = await axios.get(`/movie/${creditsId}/credits`);
    return data;
  } catch (error) {
    console.error("Error credits movie :", error);
    return null;
  }
};

export const getMoviesSearch = async (query) => {
  try {
    const { data } = await axios.get(`/search/movie`, {
      params: { query }, // Додаємо пошуковий запит
    });
    console.log(data.results);
    return data;
  } catch (error) {
    console.error("Error search movie :", error);
    return { results: [] };
  }
};
