
import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const spinnerSize = '5rem';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    flex-grow: 1;
    text-align: center;
    z-index: 100;
    background-color: rgb(255,255,255);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Spinner = styled.div`
    position: relative;
    width: ${spinnerSize};
    height: ${spinnerSize};
    margin-left: auto;
    margin-right: auto;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${spinnerSize};
        height: ${spinnerSize};
        border-radius: 50%;
        border-width: 8px;
        border-style: solid;
        border-color: rgb(235, 0, 141) transparent transparent transparent;
        animation: ${spinner} 1.3s cubic-bezier(0.49, 0.01, 0.56, 0.9) infinite;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
        }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`;
