import React from 'react';
import PropTypes from 'prop-types';

const Illustration = ({illustration, title}) => (
    <figure>
        <img
            src={`images/${illustration}`}
            alt={title}
            title={title}
        />
        <figcaption>One of the Variants of {title}</figcaption>
    </figure>
);

Illustration.propTypes = {
    illustration: PropTypes.string,
    title: PropTypes.string
};

export default Illustration;
