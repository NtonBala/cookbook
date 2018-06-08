import React from 'react';
import PropTypes from 'prop-types';

const RecipePreviewHeader = ({title, clickHandler}) => (
    <h4 className='recipe-link' onClick={clickHandler}>{title}</h4>
);

RecipePreviewHeader.propTypes = {
    title: PropTypes.string,
    clickHandler: PropTypes.func
};

export default RecipePreviewHeader;
