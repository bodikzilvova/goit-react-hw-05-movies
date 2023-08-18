import React from 'react';
import { BtnHome, BtnMovies, HeaderContainer, Sticky } from './Header.styled';


const Header = () => {
  return (
    <Sticky>
    <HeaderContainer>
      <BtnHome to="/">Home</BtnHome>
      <BtnMovies to="/movies">Movies</BtnMovies>
    </HeaderContainer>
    </Sticky>
  );
};

export default Header;
