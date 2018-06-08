import React from 'react';
import PropTypes from 'prop-types';
import Description from './elements/Description';
import Illustration from './elements/Illustration';
import Instructions from './elements/Instructions';
import RecipeHeader from './elements/RecipeHeader';
import RecipeFooter from './elements/RecipeFooter';

const Recipe = (
    {title, meta, description, ingredients, directions, illustration}) => (
    <article>

        <RecipeHeader title={title}/>

        <Description
            description={description}
            author={meta.author}
        />

        <Illustration
            illustration={illustration}
            title={title}
        />

        <Instructions
            ingredients={ingredients}
            directions={directions}
        />

        <RecipeFooter {...meta}/>

    </article>
);

Recipe.propTypes = {
    title: PropTypes.string,
    meta: PropTypes.shape(
        RecipeFooter.propTypes
    ),
    description: Description.propTypes.description,
    ingredients: Instructions.propTypes.ingredients,
    directions: Instructions.propTypes.directions,
    illustration: Illustration.propTypes.illustration
};

export default Recipe;
