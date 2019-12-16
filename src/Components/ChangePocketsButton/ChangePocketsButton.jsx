import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './ChangePocketsButton.styled';

const propTypes = {
  changePockets: PropTypes.func.isRequired,
};

function ChangePocketsButton(props) {
  const {
    changePockets,
  } = props;

  return (
    <Button type="button" onClick={changePockets} aria-label="Change pockets" />
  );
}

ChangePocketsButton.propTypes = propTypes;

export default ChangePocketsButton;
