import React from 'react';
import PropTypes from 'prop-types';

const RecipeHeader = ({title}) => (
    <header>
        <h3>{title}</h3>
    </header>
);

RecipeHeader.propTypes = {
    title: PropTypes.string
};

export default RecipeHeader;
