import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link,  useLocation } from 'react-router-dom';
import { useMoviesDetails } from 'hooks/useMoviesDetails';

export default function MovieDetails() {
  const navigate = useNavigate();
  const location = useLocation()
  const movie = useMoviesDetails();
  
  return (
    <> 
    <button onClick={() => {
      navigate(location?.state?.from ?? '/' );
      }}
      >
        Go back
        </button>
       
            {movie && (
          <div>
            <img
              src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path}
              alt={movie.title}
            />

            <div>
              <h2>
                {movie.title}({movie.release_date.slice(0, 4)})
              </h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres.map(genre => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </div>
          </div>
          )}
          <div>
            <Link to='cast' state={{from: location}}>
              Cast
            </Link>
            <Link to='reviews' state={{from: location}}>
              Reviews
            </Link>
          </div>
          <Outlet />
     
   
    </>
  )
}








