import { Button } from '@mui/material';
import StyledLink from 'components/Navigation/Navigation.styled';
import useFetchEvent from 'hooks/useFetchEvent';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { FilmDiv, FilmImg } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const data = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();

  const addToLocalStorage = () => {
    let items = JSON.parse(localStorage.getItem('movies')) || [];
    if (!items.includes(data.id)) {
      items.push(data.id);
      localStorage.setItem('movies', JSON.stringify(items));
    }
  };

  const deleteFromLocalStorage = () => {
    let items = JSON.parse(localStorage.getItem('movies')) || [];
    if (items.includes(data.id)) {
      items = items.filter(item => item !== data.id);
      localStorage.setItem('movies', JSON.stringify(items));
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </Button>
      {data && (
        <>
          <FilmDiv>
            <FilmImg src={baseURL + data.poster_path} alt="" height="450px" />
            <div>
              <h2>{data.title}</h2>
              <p>User Score: {data.vote_average.toFixed(1)}</p>
              <h3>Overview</h3>
              <p>{data.overview}</p>
              <h3>Genres</h3>
              <p>{data.genres.map(el => el.name).join(' ')}</p>
              <button onClick={addToLocalStorage} style={{ marginRight: 10 }}>
                Add to Favorite
              </button>
              <button onClick={deleteFromLocalStorage}>
                Delete from Favorite
              </button>
            </div>
          </FilmDiv>
          <p>Additional information</p>
          <StyledLink to="cast" state={location.state}>
            Cast
          </StyledLink>
          <StyledLink to="reviews" state={location.state}>
            Reviews
          </StyledLink>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MoviesDetails;
