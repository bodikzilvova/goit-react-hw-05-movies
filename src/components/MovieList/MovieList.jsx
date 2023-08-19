import React from 'react';
import { useLocation } from 'react-router-dom';
import { Films, List } from './MovieList.styled';

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <>
      {movies.map(movie => (
        <List key={movie.id}>
          <Films to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Films>
        </List>
      ))}
    </>
  );
}

export default MovieList;
