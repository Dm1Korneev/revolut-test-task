import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 30rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 
              0px 1px 1px 0px rgba(0,0,0,0.14), 
              0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const BlockFrom = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  position: relative;
`;

export const BlockTo = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  background-color: rgb(243, 243, 243);
`;

export const CurrentRateContainer = styled.div`
    position: absolute;
    bottom: -1rem;
    height: 2rem;
    display: flex;
    align-items: center;
    background: rgb(255, 255, 255);
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(0,0,0,0.12);
`;

export const ChangePocketsContainer = styled.div`
    position: absolute;
    left: 1rem;
    bottom: -1rem;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    background: rgb(255, 255, 255);
    border-radius: 1rem;
    border: 1px solid rgba(0,0,0,0.12);
`;

export const Title = styled.h1`
  font-family: "Futura New", Futura, Avenir, sans-serif;
  font-weight: 400;
  line-height: 1.25;
  font-size: 3rem;
  text-align: center;
  padding: 1rem;
`;
