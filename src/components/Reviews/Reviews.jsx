
import { useMoviesReviews } from "hooks/useMoviesReviews";
import { Item, Title, Text, Container } from "./Reviews.styled";
export default function Reviews() {

  const reviews = useMoviesReviews();
  return (
    <>
    {reviews.length !== 0 ? (
      <ul>
        {reviews.map((review, index) => (
          <Item key={index}>
            <Title>Author: {review.author}</Title>
            <Text>{review.content}</Text>
          </Item>
        ))}
      </ul>
    ) : (
      <Container>We don`t have any reviews for this movie</Container>
    )}
  </>
  )
}
