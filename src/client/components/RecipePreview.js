import React from 'react';
import PropTypes from 'prop-types';
import Description from './elements/Description';
import RecipePreviewHeader from './elements/RecipePreviewHeader';
import RecipePreviewFooter from './elements/RecipePreviewFooter';

class RecipePreview extends React.Component {
    clickHandler = () => {
        this.props.onClick(this.props.id);
    };
    render() {
        const {title, description, meta} = this.props;

        return (
            <article>

                <RecipePreviewHeader
                    title={title}
                    clickHandler={this.clickHandler}
                />

                <Description
                    description={description}
                    author={meta.author}
                />

                <RecipePreviewFooter author={meta.author}/>

            </article>
        );
    }
}

RecipePreview.propTypes = {
    title: RecipePreviewHeader.propTypes.title,
    id: PropTypes.string,
    meta: PropTypes.object,
    description: Description.propTypes.description,
    onClick: PropTypes.func.isRequired
};

export default RecipePreview;
