import axios from 'axios';

const api_key = '58ada184fb3121c1b6ebca2f5648a978';
const URL = 'https://api.themoviedb.org/3/';

const api = axios.create({ baseURL: URL, params: { api_key } });

export const fetchMoviesTrending = async () => {
  const response = await api.get('trending/movie/day');
  return response.data.results;
};

export const fetchMoviesSearch = async query => {
  const response = await api.get(`search/movie?query=${query}`);
  return response.data.results;
};

export const fetchMoviesDetails = async id => {
  const response = await api.get(`movie/${id}`);
  return response.data;
};

export const fetchMoviesCredits = async id => {
  const response = await api.get(`movie/${id}/credits`);
  return response.data.cast;
};

export const fetchMoviesReviews = async id => {
  const response = await api.get(`movie/${id}/reviews`);
  return response.data.results;
};

// /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці. fetchMoviesTrending

// /search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
//  fetchMoviesSearch

// /movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
// fetchMoviesDetails

// /movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
// fetchMoviesCredits

// /movies/get-movie-reviews запит оглядів для сторінки кінофільму.
// fetchMoviesReviews
