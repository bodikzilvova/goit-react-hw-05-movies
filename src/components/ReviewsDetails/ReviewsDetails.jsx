
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getReview } from '../../services/api.services'
import { ReviewsContainer, ReviewsAuthor, ReviewsText } from './ReviewsDetails.styled';

function ReviewsDetails() {
    const { movieId } = useParams();
const [review, setReview] = useState([]);

useEffect(() => {
    const fetchReview = async () => {
      try {
        const data = await getReview(movieId);
        setReview(data.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchReview();
  }, [movieId]);



  return (
    <>
        <div>
          {review.map(({ author, content }) => (
            <ReviewsContainer key={author}>
              <ReviewsAuthor>Author: {author}</ReviewsAuthor>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsContainer>
          ))}
        </div>
    </>
  );
}

export default ReviewsDetails