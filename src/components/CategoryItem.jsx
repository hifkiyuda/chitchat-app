import React from 'react';
import PropTypes from 'prop-types';
import Button from './styled/Button';

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
    <Button type="button" backgroundColor="lightBlue" color="white" hoverBackgroundColor="darkBlue" onClick={onCategoryClick}>{`#${category}`}</Button>
  );
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  clickCategory: PropTypes.func.isRequired,
  clearCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.string,
};

export default CategoryItem;
