import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import QueryForm from '../components/QueryForm/QueryForm';
import MovieList from '../components/MovieList/MovieList';
import { searchMovies } from '../services/api.services';

function FindMoviePage() {
  const [searchResults, setSearchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSetMovies = async value => {
    const response = await searchMovies(value);
    setSearchResults(response?.results);
  };

  useEffect(() => {
    const searchValue = searchParams.get('query');
    if (searchValue) handleSetMovies(searchValue).catch(console.error);
  }, [searchParams]);

  return (
    <>
      <QueryForm setSearchParams={setSearchParams} />
      <MovieList movies={searchResults} />
    </>
  );
}

export default FindMoviePage;
