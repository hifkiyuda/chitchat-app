import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({ category, clickCategory }) {
  const onCategoryClick = (event) => {
    event.stopPropagation();
    clickCategory(category);
  };

  return (
    <button type="button" onClick={onCategoryClick}>{`#${category}`}</button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  clickCategory: PropTypes.func.isRequired,
};

export default CategoryItem;
