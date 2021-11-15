import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onToggleAddForm, toggleAddState }) => {
  const onClick = () => {
    onToggleAddForm();
  };

  return (
    <div className='header'>
      <h1>{title}</h1>
      {!toggleAddState ? (
        <Button
          bckGroundcolor='green'
          text='Add a new task'
          onClick={onClick}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

Header.defaultProps = {
  title: 'Tasks',
};

Header.propTypes = {
  title: PropTypes.string,
};

// INJECT CSS IN JS
// in component => 'style={headingStyle}'
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'grey',
// };

export default Header;
