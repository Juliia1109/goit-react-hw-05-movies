import { useMoviesCredits } from 'hooks/useMoviesCredits';
import { List, Item, Img, Container, Title, Text } from './Cast.styled';

export default function Cast() {
  const actors = useMoviesCredits();
  return (
    <>
    {actors.length !== 0 ? (
      <List>
        {actors.map((actor, index) => (
          <Item key={index}>
    
                     <Img
                        src={
                          'https://image.tmdb.org/t/p/w500/' + actor.profile_path
                        }
                        alt={actor.name}
                      />
    
            <Title>{actor.character}</Title>
                    <Text>{actor.name}</Text>
          </Item>
        ))}
      </List>
    ) : (
      <Container>There is no cast in this film!</Container>
    )}
    </> 
      )}
 


