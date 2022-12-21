import { useState, useEffect } from 'react';
import { fetchMoviesCredits } from 'services/movies.API';
import { useParams } from 'react-router-dom';

export const useMoviesCredits = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    fetchMoviesCredits(movieId).then(setCast);
  }, [movieId]);

  return cast;
};
