import { fetchFilmReviews } from 'services/fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [event, setEvent] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    fetchFilmReviews(movieId).then(data => setEvent(data.results));
  }, [movieId, setEvent]);

  return (
    <>
      {event.length !== 0 ? (
        event.map(el => {
          return (
            <>
              <h2>Author: {el.author}</h2>
              <p>{el.content}</p>
            </>
          );
        })
      ) : (
        <p>There are no reviews</p>
      )}
    </>
  );
};

export default Reviews;
