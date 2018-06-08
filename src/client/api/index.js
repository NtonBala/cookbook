import request from 'superagent';

export const fetchRecipe = (recipeId) => request
    .get(`/api/recipes/${recipeId}`)
    .then((res) => res.body);
    //.catch(console.err); //eslint-disable-line no-console
