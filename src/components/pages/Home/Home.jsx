import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useMoviesTrending } from 'hooks/useMoviesTrending';

export default function Home() {
const movies = useMoviesTrending ();
  return (
  <>
  {movies && (
    <ul>
      {movies.map(movie => (
    <li key={movie.id}>
        <Link to={`movies/${movie.id}/`}>{movie.title}</Link>
    </li>
))}
 <Outlet />
    </ul>
  )}
  </>
  )
}
