const ActionType = {
  RECEIVE_FILTERED_CATEGORIES: 'RECEIVE_FILTERED_CATEGORIES',
  ACTIVE_CATEGORY: 'ACTIVE_CATEGORY',
  CLEAR_ACTIVE_CATEGORY: 'CLEAR_ACTIVE_CATEGORY',
};

function receiveFilteredCategoriesActionCreator(filteredCategories) {
  return {
    type: ActionType.RECEIVE_FILTERED_CATEGORIES,
    payload: {
      filteredCategories,
    },
  };
}

function setActiveCategoryActionCreator(activeCategory) {
  return {
    type: ActionType.ACTIVE_CATEGORY,
    payload: {
      activeCategory,
    },
  };
}

function clearActiveCategoryActionCreator(clearActiveCategory) {
  return {
    type: ActionType.CLEAR_ACTIVE_CATEGORY,
    payload: {
      clearActiveCategory,
    },
  };
}

export {
  ActionType,
  receiveFilteredCategoriesActionCreator,
  setActiveCategoryActionCreator,
  clearActiveCategoryActionCreator,
};
