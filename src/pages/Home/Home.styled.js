import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
`;

export const PhotoCard = styled.li`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
  transition: filter 300ms ease-in-out;
  &:hover,
  &:focus {
    filter: drop-shadow(1px 1px 15px black);
  }
  width: calc((100% - 32px) / 3);
`;

export const MovieImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: auto;

  object-fit: cover;
  transition: filter 300ms ease-in-out;

  max-width: 395px;
  height: 575px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding-bottom: 16px;
  padding-top: 12px;
`;

export const FilmTitle = styled.p`
  font-family: inherit;
  font-weight: 500;

  font-size: 19.5px;
  line-height: 1.2;
`;

export const MovieTitle = styled.h1`
  text-align: center;
`;
