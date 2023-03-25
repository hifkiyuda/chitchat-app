import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoriesList({
  threads, clickCategory, clearCategory, activeCategory,
}) {
  const mappedCategories = threads.map((thread) => thread.category);
  const newCategories = [...new Set(mappedCategories)];

  return (
    <div className="categories">
      {
        newCategories.map((category) => (
          <CategoryItem key={category} category={category} clickCategory={clickCategory} clearCategory={clearCategory} activeCategory={activeCategory} />
        ))
      }
    </div>
  );
}

CategoriesList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickCategory: PropTypes.func.isRequired,
  clearCategory: PropTypes.func.isRequired,
  activeCategory: PropTypes.string,
};

export default CategoriesList;
