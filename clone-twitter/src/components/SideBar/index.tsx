import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi
          quo, tenetur similique amet, impedit consectetur veniam unde commodi
          labore sequi quam repudiandae quia nesciunt reprehenderit fugit.
          Rerum, tempora necessitatibus.
        </p>
      </Body>
    </Container>
  );
};

export default SideBar;
