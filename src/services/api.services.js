const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2476d1779a41c69192ee5828763b3188';

export const getTrandingToday = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  });
};

export const searchMovies = (query, value) => {
    const queryParams = new URLSearchParams({
      api_key: API_KEY,
      query: query
    });
  
    return fetch(`${BASE_URL}/search/movie?${queryParams.toString()}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      });
  };

  export const getMovieById = (movieId) => {
 
    return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      });
  };


// poster_path, id, title, popularity, overview, genre_ids