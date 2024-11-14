import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const imgBaseURL = 'https://image.tmdb.org/t/p/w500';

const axiosOptions = {
  headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWE0ZDMxODdjNTlkOWU0MmJlY2EzYTk4ZGQzODU0YiIsIm5iZiI6MTczMTU2MzQ2My4wNzMyODUsInN1YiI6IjY3MzRjZTQ0Njc4ZDM4NTZhNzZiNmMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gShhaYysGz5Qr8yWyn5Zkb2k9cvwfHmjK7PDoIbPgP8'
    }
}

export const getTrendingMovies = async ()=> {
  const { data } = await axios.get('/trending/movie/day', axiosOptions);
    return data;
}

export const getMovieById = async (id)=>{
  const { data } = await axios.get(`/movie/${id}`, axiosOptions);
  return data;
}

export const getMovieCast = async(id)=> {
  const { data } = await axios.get(`/movie/${id}/credits`, axiosOptions);
  return data;
}

export const getMovieReviews = async(id)=> {
  const { data } = await axios.get(`/movie/${id}/reviews`, axiosOptions);
  return data;
}

export const searchMovies = async (searchMovie)=> {
  const { data } = await axios.get(`/search/movie?query=${searchMovie}`,axiosOptions);
  return data;
}