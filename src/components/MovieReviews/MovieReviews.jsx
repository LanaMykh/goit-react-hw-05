import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../movies-api';

const MovieReviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieReviewsById = async movieId => {
      try {
        setError('');
        setIsLoading(true);
        const { results } = await getMovieReviews(movieId);
        setMovieReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviewsById(movieId);
  }, [movieId]);

  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <p>Wait a few moments. Loading...</p>}

      <ul>
        {movieReviews.length > 0 ? (
          movieReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
