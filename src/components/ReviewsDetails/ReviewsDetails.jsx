
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getReview } from '../../services/api.services'

function ReviewsDetails() {
    const { movieId } = useParams();
const [review, setReview] = useState([]);
const [isReviewVisible, setIsReviewVisible] = useState(false);

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

  const handleReviewVisibility = () => {
    setIsReviewVisible(!isReviewVisible);
  };


  return (
    <>
      <span onClick={handleReviewVisibility}>
        {isReviewVisible ? 'Hide Review' : 'Show Review'}
      </span>
      {isReviewVisible && (
        <div>
          {review.map(({ author, content }) => (
            <div key={author}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ReviewsDetails