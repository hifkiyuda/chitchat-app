import React from 'react';
import PropTypes from 'prop-types';

function CategoryItem({
  category, clickCategory, clearCategory, activeCategory,
}) {
  const onCategoryClick = (event) => {
    event.stopPropagation();

    if (activeCategory === category) {
      clearCategory();
    } else {
      clickCategory(category);
    }
  };

  return (
    <button type="button" onClick={onCategoryClick}>{`#${category}`}</button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  clickCategory: PropTypes.func.isRequired,
  clearCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.string,
};

export default CategoryItem;
