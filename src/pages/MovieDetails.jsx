import React, { useEffect, useRef, useState } from 'react';
import { getMovieById } from '../services/api.services';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import {
  BtnBack,
  DetailsContainer,
  Wrapper,
  MovieTitle,
  OverviewTitle,
  OverviewText,
  Popularity,
  GenresTitle,
  AddInfoTitle,
  CastLink,
  ReviewLink,
} from '../components/MovieDetails/MovieDetails.styled';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

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

  if (!movieData) {
    return;
  }

  return (
    <>
      <BtnBack to={backLink.current}>Back</BtnBack>
      <DetailsContainer>
        <img
          src={
            movieData.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
              : defaultImg
          }
          width={350}
          height={400}
          alt=""
        />
        <Wrapper>
          <MovieTitle>{movieData.title}</MovieTitle>
          <Popularity>User Score {movieData.vote_average}%</Popularity>
          <OverviewTitle>Overview</OverviewTitle>
          <OverviewText>{movieData.overview}</OverviewText>
          <GenresTitle>Genres</GenresTitle>
          {movieData && (
            <ul>
              {movieData.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          )}
        </Wrapper>
      </DetailsContainer>

      <AddInfoTitle>Additional information</AddInfoTitle>
      <Link to="cast">
        <CastLink>Cast</CastLink>
      </Link>
      <Link to="reviews">
        <ReviewLink>Review</ReviewLink>
      </Link>
      <Outlet />
    </>
  );
}

export default MovieDetails;
