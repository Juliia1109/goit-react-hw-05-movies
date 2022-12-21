import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useMoviesDetails } from 'hooks/useMoviesDetails';
import { Link, Button, ContainerImg, Img, Title, Text, TitleText, List } from './MovieDetails.styled.';

export default function MovieDetails() {
  const location = useLocation()
  const movie = useMoviesDetails();
  
  return (
    <> 
      <Link to={location?.state?.from ?? "/"}> 
            <Button type="button">
                Go back
            </Button>
        </Link>
       
            {movie && (
          <ContainerImg>
            <Img
              src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
              alt={movie.title}
            />

            <div>
              <Title>
                {movie.title}({movie.release_date.slice(0, 4)})
              </Title>
              <Text>User Score: {movie.vote_average * 10}%</Text>
              <TitleText>Overview</TitleText>
              <Text>{movie.overview}</Text>
              <TitleText>Genres</TitleText>
              {movie.genres.map(genre => (
                <Text key={genre.id}>{genre.name}</Text>
              ))}
            </div>
          </ContainerImg>
          )}
          <div>
            <TitleText>Additional information</TitleText>
            <List>
                    <Link to="cast" state={location.state}>Cast</Link>
              
                    <Link to="reviews" state={location.state}>Reviews</Link>                
            </List>
            <Outlet/>
        </div>
     
   
    </>
  )
}








