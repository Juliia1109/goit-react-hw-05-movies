import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { fetchMoviesSearch } from 'services/movies.API';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || query === null) return;
    
    fetchMoviesSearch(query).then(setMovies);
        }, [query]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ query: e.currentTarget.elements.query.value.trim() });
        e.target.reset();
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
     <input name="query" type="text" />
     <button>Search</button>
    </form>
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
