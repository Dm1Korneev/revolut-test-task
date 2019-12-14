import styled from 'styled-components';

const Currency = styled.div`
  width: 400px;
  height: 200px;
`;

export const CurrencyFrom = styled(Currency)`
  background-color: red;
`;

export const CurrencyTo = styled(Currency)`
  background-color: blue;
`;

export const Title = styled.h1`
  font-family: "Futura New", Futura, Avenir, sans-serif;
  font-weight: 400;
  line-height: 1.25;
  font-size: 3rem;
  text-align: center;
  padding-bottom: 1rem;
`;
