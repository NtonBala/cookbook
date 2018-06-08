import React from 'react';
import PropTypes from 'prop-types';

const RecipeFooter = ({author, link, date}) => (
    <footer>
        From <span>{author}</span>, originally posted on <a
            href={link}
            title={`Original ${author}'s Post`}
            rel='nofollow external'
            target='_blank'>allrecipes</a> on <time dateTime=''>{date}</time>
    </footer>
);

RecipeFooter.propTypes = {
    author: PropTypes.string,
    link: PropTypes.string,
    date: PropTypes.string
};

export default RecipeFooter;
