import { fetchFilmCredits } from 'services/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterImg, CharacterItem, CharacterList } from './Cast.styled';

const Cast = () => {
  const [event, setEvent] = useState([]);
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const noImagePoster =
    'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';

  const { movieId } = useParams();
  useEffect(() => {
    fetchFilmCredits(movieId).then(data => setEvent(data.cast));
  }, [movieId, setEvent]);

  return (
    <>
      {event.length !== 0 ? (
        <CharacterList>
          {event.map(el => {
            return (
              <CharacterItem key={el.id}>
                <CharacterImg
                  src={
                    el.profile_path ? baseURL + el.profile_path : noImagePoster
                  }
                  alt=""
                  width="142"
                />
                <div>
                  <h2>Actor: {el.name}</h2>
                  <h2>Character: {el.character}</h2>
                </div>
              </CharacterItem>
            );
          })}
        </CharacterList>
      ) : (
        <p>There are no reviews</p>
      )}
    </>
  );
};

export default Cast;
