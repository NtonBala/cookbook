//fetch data from api
import request from 'superagent';
import config from './config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';

const getApiUrl = (recipeId) => (
    recipeId ?
        `${config.serverURL()}/api/recipes/${recipeId}` :
        `${config.serverURL()}/api/recipes`
);

const getInitialData = (recipeId, apiData) => {
    console.log('INSIDE SERVER RENDER');
    return (recipeId ? {
        currentRecipeId: apiData.id,
        recipes: {
            [apiData.id]: apiData
        }
    } : {recipes: apiData.recipes});
};

const serverRender = (recipeId) => request
    .get(getApiUrl(recipeId))
    .then((res) => {
        const initialData = getInitialData(recipeId, res.body);

        return {
            initialMarkup: ReactDOMServer.renderToString(
                <App initialData={initialData}/>
            ),
            initialData
        };
    });
    //.catch(console.err); //eslint-disable-line

export default serverRender;
