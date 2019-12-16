import React from 'react';

import { Container, Spinner } from './Loader.styled';

function Loader() {
  return (
    <Container>
      <Spinner>
        <div />
        <div />
        <div />
        <div />
      </Spinner>
    </Container>
  );
}

export default Loader;
