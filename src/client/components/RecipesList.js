import React from 'react';
import PropTypes from 'prop-types';
import RecipePreview from './RecipePreview';
import RecipesListHeader from './elements/RecipesListHeader';

const RecipesList = ({recipes, onRecipeClick}) => (
    <section>
        <RecipesListHeader>
            Best Recipes from Best Amateurs
        </RecipesListHeader>

        {Object.keys(recipes).map((id) => {
            const {title, meta, description} = recipes[id];

            return (
                <RecipePreview
                    key={id}
                    title={title}
                    meta={meta}
                    description={description}
                    id={id}
                    onClick={onRecipeClick}
                />
            );
        })}
    </section>
);

RecipesList.propTypes = {
    recipes: PropTypes.object,
    onRecipeClick: RecipePreview.propTypes.onClick
};

export default RecipesList;
