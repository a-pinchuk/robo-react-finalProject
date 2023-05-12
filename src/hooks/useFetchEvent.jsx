import { fetchFilmById } from 'services/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useFetchEvent = () => {
  const [event, setEvent] = useState();

  const { movieId } = useParams();

  useEffect(() => {
    fetchFilmById(movieId).then(setEvent);
  }, [movieId, setEvent]);
  return event;
};

export default useFetchEvent;
