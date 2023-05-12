// import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { fetchSearchFilm } from 'services/fetchApi';
import {
  FilmTitle,
  GalleryList,
  MovieImage,
  MovieInfo,
  PhotoCard,
} from '../Home/Home.styled';

const Movies = () => {
  const [event, setEvent] = useState([]);
  const [search, setSearchParams] = useSearchParams();
  const filmName = search.get('query');
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const noImagePoster =
    'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';
  const location = useLocation();

  useEffect(() => {
    if (search === null || search === '') return;
    fetchSearchFilm(filmName).then(setEvent);
  }, [search, filmName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ query: e.target.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          name="query"
          color="secondary"
          id="outlined-basic"
          label="Search Film"
          variant="outlined"
        />

        <Button type="submit" variant="outlined" size="medium" sx={{ ml: 2 }}>
          Search
        </Button>
      </form>
      {event && (
        <GalleryList>
          {event.map(el => {
            return (
              <PhotoCard key={el.id}>
                <Link to={`/movies/${el.id}`} state={{ from: location }}>
                  <MovieImage
                    src={
                      el.poster_path ? baseURL + el.poster_path : noImagePoster
                    }
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
      )}
    </>
  );
};

export default Movies;
