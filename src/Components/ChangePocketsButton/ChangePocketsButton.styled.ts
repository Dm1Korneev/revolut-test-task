
import styled from 'styled-components';

type Props = {
    onClick: () => void;
  }

export const Button = styled.button<Props>`
    display: block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    background: url('icons/import_export-24px.svg');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: inherit;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: rgb(250, 250, 250);
    }
`;
