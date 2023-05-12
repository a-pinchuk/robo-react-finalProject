import {
  FilmTitle,
  GalleryList,
  MovieImage,
  MovieInfo,
  PhotoCard,
} from 'pages/Home/Home.styled';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchFilmById } from 'services/fetchApi';

const FavoriteMovies = () => {
  const [movies, setMovies] = useState([]);
  const location = useNavigate();
  const baseURL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    const movieIds = JSON.parse(localStorage.getItem('movies')) || [];
    // Загружаем информацию о каждом фильме по ID
    Promise.all(movieIds.map(id => fetchFilmById(id))).then(moviesData =>
      setMovies(moviesData)
    );
  }, []);

  return (
    <GalleryList>
      {movies.map(el => {
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
  );
};

export default FavoriteMovies;
