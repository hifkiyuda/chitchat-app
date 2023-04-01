import { ActionType } from './action';

function categoriesReducer(categories = { filteredCategories: null, activeCategory: '' }, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_FILTERED_CATEGORIES:
      return {
        filteredCategories: action.payload.filteredCategories,
        activeCategory: action.payload.activeCategory,
      };
    case ActionType.ACTIVE_CATEGORY:
      return {
        filteredCategories: categories.filteredCategories,
        activeCategory: action.payload.activeCategory,
      };
    case ActionType.CLEAR_ACTIVE_CATEGORY:
      return {
        filteredCategories: null,
        activeCategory: action.payload.clearActiveCategory,
      };
    default:
      return categories;
  }
}

export default categoriesReducer;
