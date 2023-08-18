import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/api.services';
import { ActorName, ActorRole, CastList } from './CastDetails.styled';

function CastDetails() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=200x300';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <>
      <CastList>
        {cast.map(({ cast_id, character, original_name, profile_path }) => (
          <li key={cast_id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : defaultImg
              }
              alt=""
            />
            <ActorName>{original_name}</ActorName>
            <ActorRole>{character}</ActorRole>
          </li>
        ))}
      </CastList>
    </>
  );
}

export default CastDetails;
