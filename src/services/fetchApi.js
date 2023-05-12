import axios from 'axios';

const KEY = '9f3449ca8495a13b6d35e887839f0061';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRE_URL = `${BASE_URL}/genre/movie/list`;
const DISCOVER = `${BASE_URL}/discover/movie`;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingFilms() {
  const data = await axios('trending/all/day', {
    params: {
      api_key: KEY,
    },
  });
  return data.data.results;
}

export async function fetchFilmById(id) {
  const data = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}
export async function fetchFilmReviews(id) {
  const data = await axios(`movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}

export async function fetchFilmCredits(id) {
  const data = await axios(`movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });

  return data.data;
}

export async function fetchSearchFilm(query) {
  const data = await axios(`search/movie`, {
    params: {
      api_key: KEY,
      query: query,
      language: 'en-US',
      page: 1,
    },
  });

  return data.data.results;
}

export async function fetchFilmGenres() {
  const searchParams = new URLSearchParams({
    api_key: KEY,
  });
  return axios.get(`${GENRE_URL}?${searchParams}`);
}

export async function fetchFilteredFilms(property, value) {
  const searchParams = new URLSearchParams({
    api_key: KEY,
    //   language: language,
    //   sort_by: sort,
    page: 1,
    [property]: value,
    //   primary_release_year: year,
  });
  return axios.get(`${DISCOVER}?${searchParams}`);
}
