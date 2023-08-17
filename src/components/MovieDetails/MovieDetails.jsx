import React, { useEffect, useState } from 'react';
import { getMovieById } from '../../services/api.services';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState('');


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
      <img
        src={`https://image.tmdb.org/t/p/w300/${movieData.poster_path}`}
        alt=""
      />
      <h2>{movieData.title}</h2>
      <p>{movieData.popularity}</p>
      <h3>Overview</h3>
      <p>{movieData.overview}</p>
      <h3>Genres</h3>
      {movieData && (
        <ul>
          {movieData.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieDetails;
