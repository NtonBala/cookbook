import React from 'react';
import PageHeader from './components/PageHeader';
import RecipesList from './components/RecipesList';
import PropTypes from 'prop-types';
import * as api from './api';
import Recipe from './components/Recipe';

const pushState = (obj, url) => window.history.pushState(obj, '', url);

class App extends React.Component {
    state = this.props.initialData;
    fetchRecipe = (id) => {
        pushState(
            {currentRecipeId: id},
            `/recipes/${id}`
        );

        api.fetchRecipe(id)
            .then(recipe => {
                this.setState((prevState) => ({
                    currentRecipeId: recipe.id,
                    recipes: {
                        ...prevState.recipes,
                        [recipe.id]: recipe
                    }
                }));
            });
    };
    pageHeader = () => (
        this.state.currentRecipeId ?
            'Diversify Your Menu With New Recipe' :
            'Get New Awesome Cooking Ideas From Our Recipes Blog'
    );
    currentContent() {
        const {recipes, currentRecipeId} = this.state;

        return (
            currentRecipeId ?
                <Recipe {...recipes[currentRecipeId]}/> :
                <RecipesList
                    recipes={this.state.recipes}
                    onRecipeClick={this.fetchRecipe}
                />
        );
    }
    render = () => (
        <main>
            <PageHeader message={this.pageHeader()}/>
            {this.currentContent()}
        </main>
    )
}

App.propTypes = {
    initialData: PropTypes.object
};

export default App;
