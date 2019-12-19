import React, { FC } from 'react';

import { Button } from './ChangePocketsButton.styled';

type Props = {
  changePockets: () => void;
}
const ChangePocketsButton: FC<Props> = (props): JSX.Element => {
  const {
    changePockets,
  } = props;

  return (
    <Button type="button" onClick={changePockets} aria-label="Change pockets" />
  );
};

export default ChangePocketsButton;
