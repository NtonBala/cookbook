import React from 'react';
import PropTypes from 'prop-types';

const Header = ({message}) => (
    <h2>{message}</h2>
);

Header.propTypes = {
    message: PropTypes.string
};

export default Header;
