import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

function CategoriesList({ threads, clickCategory }) {
  const mappedCategories = threads.map((thread) => thread.category);
  const newCategories = mappedCategories.filter((item, index) => mappedCategories.indexOf(item) === index);

  return (
    <div className="categories">
      {
        newCategories.map((category) => (
          <CategoryItem key={category} category={category} clickCategory={clickCategory} categories={mappedCategories} />
        ))
      }
    </div>
  );
}

CategoriesList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickCategory: PropTypes.func.isRequired,
};

export default CategoriesList;
