import { useState, useEffect } from 'react';
import { fetchMoviesTrending } from 'services/movies.API';

export const useMoviesTrending = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMoviesTrending().then(setMovies);
  }, []);
  return movies;
};
