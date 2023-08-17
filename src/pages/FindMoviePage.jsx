import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import QueryForm from '../components/QueryForm/QueryForm';
import MovieList from '../components/MovieList/MovieList';
import { searchMovies } from '../services/api.services';

function FindMoviePage() {
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); 

  const handleSubmit = async value => {
    const response = await searchMovies(value);
    setSearchResults(response.results);

    searchParams.set('query', value);
    navigate(`/movies/query/${value}`);
  };

  return (
    <>
      <QueryForm onSubmit={handleSubmit} />
      <MovieList movies={searchResults} />
    </>
  );
}

export default FindMoviePage;
