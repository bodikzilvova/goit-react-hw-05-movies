import React, { useEffect, useState } from 'react';
import { getMovieById } from '../../services/api.services';
import { Link, useLocation, useParams } from 'react-router-dom';
import CastDetails from 'components/CastDetails/CastDetails';
import ReviewsDetails from 'components/ReviewsDetails/ReviewsDetails';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState('');
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

 const location = useLocation()
 const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await getMovieById(movieId);
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

 

  return (
    <>
    <Link to={backLink}>Back</Link>
      <img
        src={
 movieData.poster_path ?
 `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
 : defaultImg
}
width={250}
        alt=""
      />
      <h2>{movieData.title}</h2>
      <p>{movieData.popularity}</p>
      <h3>Overview</h3>
      <p>User Score {movieData.vote_average}%</p>
      <h3>Genres</h3>
      {movieData && (
        <ul>
          {movieData.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}

      <h3>Additional information</h3>
      <Link to={`/movies/${movieId}/cast`}>
     <CastDetails />
        </Link>
      <Link>
      <ReviewsDetails />
      </Link>
    </>
  );
}

export default MovieDetails;
