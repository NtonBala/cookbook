import React from 'react';
import PropTypes from 'prop-types';

const Description = ({description, author}) => (
    <blockquote>
        <q>{description}</q>
        <cite> by <span>{author}</span> &#8212; <a
            href='https://www.allrecipes.com/'
            title='Allrecipes.com'
            rel='nofollow external'
            target='_blank'
        >Allrecipes.com</a></cite>
    </blockquote>
);

Description.propTypes = {
    description: PropTypes.string,
    author: PropTypes.string
};

export default Description;
