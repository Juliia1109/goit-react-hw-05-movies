import { useState, useEffect } from 'react';
import { fetchMoviesDetails } from 'services/movies.API';
import { useParams } from 'react-router-dom';

export const useMoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMoviesDetails(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};
