import {
  FilmTitle,
  GalleryList,
  MovieImage,
  MovieInfo,
  PhotoCard,
} from 'pages/Home/Home.styled';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchFilmGenres, fetchFilteredFilms } from '../../services/fetchApi'; // замените 'yourAPIfile' на имя вашего файла API

const FilterGenres = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const location = useNavigate();
  const baseURL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    async function getGenres() {
      try {
        const response = await fetchFilmGenres();
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Ошибка при получении жанров: ', error);
      }
    }
    getGenres();
  }, []);

  useEffect(() => {
    async function getFilteredFilms() {
      if (!selectedGenre) return;
      try {
        const response = await fetchFilteredFilms('with_genres', selectedGenre);
        setFilteredFilms(response.data.results);
      } catch (error) {
        console.error('Ошибка при фильтрации фильмов: ', error);
      }
    }
    getFilteredFilms();
  }, [selectedGenre]);

  const handleGenreChange = e => {
    setSelectedGenre(e.target.value);
  };

  return (
    <div>
      <select value={selectedGenre} onChange={handleGenreChange}>
        <option value="">Выберите жанр</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <div>
        <GalleryList>
          {filteredFilms.map(el => {
            return (
              <PhotoCard key={el.id}>
                <Link to={`/movies/${el.id}`} state={{ from: location }}>
                  <MovieImage
                    src={baseURL + el.poster_path}
                    alt=""
                    width="500"
                    height="750"
                  />
                  <MovieInfo>
                    <FilmTitle>{el.title ? el.title : el.name}</FilmTitle>
                  </MovieInfo>
                </Link>
              </PhotoCard>
            );
          })}
        </GalleryList>
      </div>
    </div>
  );
};

export default FilterGenres;
