import React, { FC } from 'react';

import { Container, Spinner } from './Loader.styled';

const Loader: FC = (): JSX.Element => (
  <Container>
    <Spinner>
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  </Container>
);

export default Loader;
