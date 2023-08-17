import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </>
  );
}

export default MovieList;
