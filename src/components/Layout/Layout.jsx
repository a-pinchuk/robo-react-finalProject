import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Navigation />
        </Header>
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
};

export default Layout;
