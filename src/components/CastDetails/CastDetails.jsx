import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCast } from '../../services/api.services'

function CastDetails() {
    const { movieId } = useParams();
const [cast, setCast] = useState([]);
const [isCastVisible, setIsCastVisible] = useState(false);
const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

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

  const handleCastVisibility = () => {
    setIsCastVisible(!isCastVisible);
  };


  return (
    <>
      <span onClick={handleCastVisibility}>
        {isCastVisible ? 'Hide Cast' : 'Show Cast'}
      </span>
      {isCastVisible && (
        <ul>
          {cast.map(({ cast_id, character, original_name, profile_path }) => (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                alt=""
              />
              <p>{original_name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default CastDetails