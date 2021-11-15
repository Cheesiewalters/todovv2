import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.bckGroundcolor,
  };

  return (
    <button className='btn' style={buttonStyle} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  bckGroundcolor: 'steelblue',
  text: 'Default button text',
};

Button.propTypes = {
  text: PropTypes.string,
  bckGroundcolor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
