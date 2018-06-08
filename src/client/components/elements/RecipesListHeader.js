import React from 'react';
import PropTypes from 'prop-types';

const RecipesListHeader = ({children}) => (
    <h3>{children}</h3>
);

RecipesListHeader.propTypes = {
    children: PropTypes.string
};

export default RecipesListHeader;
