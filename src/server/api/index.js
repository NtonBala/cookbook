const express = require('express');
const router = express.Router();
const data = require('../testData');

//normalize res data from [] into {}
const recipes = data.recipes.reduce(
    (obj, recipe) => {
        obj[recipe.id] = recipe;
        return obj;
    },
    {}
);

router.get('/recipes', (req, res) => {
    res.send({recipes});
});

router.get('/recipes/:recipeId', (req, res) => {
    const recipe = recipes[req.params.recipeId];
    console.log('INSIDE SERVER API ON /RECIPES/:RECIPEID');
    res.send(recipe);
});

module.exports = router;
