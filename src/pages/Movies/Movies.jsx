import { fetchMoviesSearch } from 'services/movies.API';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Form, Input, Button, List, Item, Link } from './Movies.styled';


export default function Movies() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    
    fetchMoviesSearch(query).then(setMovies);
        }, [query]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({ query: e.currentTarget.elements.query.value.trim() });
        e.target.reset();
    }

  return (

    <>
    <Form onSubmit={handleSubmit}>
     <Input name="query" type="text" />
     <Button type="submit">Search</Button>
    </Form>
    {movies && (
   <List>
 {movies.map(movie => (
     <Item key={movie.id}>
        <Link to={`${movie.id}`} state={{ from: location }}>{movie.title}</Link>
     </Item>
 ))}
  </List>
  )}
    </>

  )
}
