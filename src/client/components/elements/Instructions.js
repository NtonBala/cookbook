import React from 'react';
import PropTypes from 'prop-types';

const Instructions = ({ingredients, directions}) => (
    <dl>
        <dt>Ingredients</dt>
        {ingredients.map((ingredient, i) => (
            <dd key={`ingradient${i}`}>{ingredient}</dd>
        ))}
        <dt>Directions</dt>
        {directions.map((direction, i) => (
            <dd key={`direction${i}`}>{direction}</dd>
        ))}
    </dl>
);

Instructions.propTypes = {
    ingredients: PropTypes.arrayOf(PropTypes.string),
    directions: PropTypes.arrayOf(PropTypes.string)
};

export default Instructions;
