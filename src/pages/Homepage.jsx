import MovieList from 'components/MovieList/MovieList';
import { React, useState, useEffect } from 'react';
import { getTrandingToday } from '../services/api.services';
import { TandingTitle } from './Homepage.styled';


function Homepage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrandingToday()
      .then(data => setTrendingMovies(data.results))
      .catch(error => console.error('Error fetching trending movies:', error));
  }, []);
  return (
    <>
      <TandingTitle>Trending today</TandingTitle>
      <ul>
        <MovieList movies={trendingMovies} />
      </ul>
    </>
  );
}

export default Homepage;
