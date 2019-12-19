import React, { FC } from 'react';

import CurrencyConverter from 'Components/CurrencyConverter';
import { Container } from './App.styled';

const App: FC = (): JSX.Element => (
  <Container>
    <CurrencyConverter />
  </Container>
);

export default App;
