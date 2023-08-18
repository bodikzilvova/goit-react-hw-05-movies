import React from 'react';
import { GlobalStyle } from './Continer.styled';

function Container({ children }) {
  return (
    <>
      <GlobalStyle>{children}</GlobalStyle>
    </>
  );
}

export default Container;
