
import { useMoviesCredits } from 'hooks/useMoviesCredits';


export default function Cast() {

  const actors = useMoviesCredits();


  return (

    <>
      {actors && (
        <div>
          <ul>
            {actors.map((actor, index) => (
              <li key={index}>
                {actor.profile_path ? (
                  <img
                    src={
                      'https://image.tmdb.org/t/p/w500/' + actor.profile_path
                    }
                    alt={actor.name}
                  />
                ) : (
                  <div>Not found!</div>
                )}
                <h3>{actor.character}</h3>
                <h4>{actor.name}</h4>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
