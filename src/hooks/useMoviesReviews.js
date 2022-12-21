import { useState, useEffect } from 'react';
import { fetchMoviesReviews } from 'services/movies.API';
import { useParams } from 'react-router-dom';

export const useMoviesReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMoviesReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews;
};
