
import styled from 'styled-components';

export const Button = styled.button`
    display: inline-flex;
    cursor: pointer;
    width: fit-content;
    line-height: 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: rgb(235, 0, 141);
    padding: 1em 4.125rem;
    border-radius: 2rem;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 
                0px 6px 10px 0px rgba(0,0,0,0.14), 
                0px 1px 18px 0px rgba(0,0,0,0.12);

    &[disabled] {
        background-color: rgb(160, 160, 160);
        box-shadow: none;
        cursor: default;
        pointer-events: none;
    }

    &:hover:not([disabled]) {
        background-color: rgb(210, 0, 126);
    }
`;
