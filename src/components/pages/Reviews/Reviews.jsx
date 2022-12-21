
import { useMoviesReviews } from "hooks/useMoviesReviews";
import { Item, Title, Text } from "./Reviews.styled";
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
      <div>We don`t have any reviews for this movie</div>
    )}
  </>
  )
}
