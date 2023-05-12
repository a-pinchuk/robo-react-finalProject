import StyledLink from './Navigation.styled';

const Navigation = () => {
  return (
    <header>
      <nav>
        <StyledLink to="/">Tranding movies</StyledLink>
        <StyledLink to="/movies">Search movies</StyledLink>
        <StyledLink to="/filterGenres">Filter movies by Genres</StyledLink>
        <StyledLink to="/favoriteMovies">Favorite Movies</StyledLink>
      </nav>
    </header>
  );
};

export default Navigation;
