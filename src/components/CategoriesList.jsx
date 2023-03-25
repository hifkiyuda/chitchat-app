import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoriesList({
  threads, clickCategory, clearCategory, activeCategory, setActiveCategory,
}) {
  const categories = threads.map((thread) => thread.category);
  const newCategories = categories.filter((item, index) => categories.indexOf(item) === index);

  return (
    <div className="categories">
      {
        newCategories.map((category) => (
          <CategoryItem key={category} category={category} clickCategory={clickCategory} clearCategory={clearCategory} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
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
  setActiveCategory: PropTypes.func,
};

export default CategoriesList;
