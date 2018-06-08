import React from 'react';
import PropTypes from 'prop-types';

const RecipePreviewFooter = ({author}) => (
    <footer>
        Published by {author}
    </footer>
);

RecipePreviewFooter.propTypes = {
    author: PropTypes.string
};

export default RecipePreviewFooter;
