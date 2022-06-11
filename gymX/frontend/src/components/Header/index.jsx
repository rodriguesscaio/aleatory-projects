import { Container, Logo, Navigation, Access } from './styles';

const Header = () => {
  return (
    <Container>
      <Logo>GymX</Logo>

      <Navigation>
        <ul>
          <li>
            <a href='#'>Membros</a>
          </li>
          <li>
            <a href='#'>Professores</a>
          </li>
        </ul>
      </Navigation>

      <Access>Administrador(a)</Access>
    </Container>
  );
};

export default Header;
