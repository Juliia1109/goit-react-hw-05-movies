import React from 'react';
import { useMoviesTrending } from 'hooks/useMoviesTrending';
import { Container, List, Item, Link } from './Home.styled';

export default function Home() {
const movies = useMoviesTrending ();
  return (
  <Container>
  {movies && (
    <List>
      {movies.map(movie => (
    <Item key={movie.id}>
        <Link to={`movies/${movie.id}/`}>{movie.title}</Link>
    </Item>
))}
    </List>
  )}
  </Container>
  )
}
