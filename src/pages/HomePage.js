import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncDislikeThread, asyncLikeThread, asyncNeutralizeThread } from '../states/threads/action';
import {
  clearActiveCategoryActionCreator, receiveFilteredCategoriesActionCreator, setActiveCategoryActionCreator,
} from '../states/categories/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
    categories,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLikeThread = (id) => {
    dispatch(asyncLikeThread(id));
  };

  const onDislikeThread = (id) => {
    dispatch(asyncDislikeThread(id));
  };

  const onNeutralizeThread = (id) => {
    dispatch(asyncNeutralizeThread(id));
  };

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const onFilterCategory = (selectedCategory) => {
    const result = (threads.filter((thread) => thread.category === selectedCategory));
    dispatch(receiveFilteredCategoriesActionCreator(result));
    setActiveCategory(selectedCategory);
  };

  const setActiveCategory = (category) => {
    dispatch(setActiveCategoryActionCreator(category));
  };

  const clearActiveCategory = () => {
    dispatch(clearActiveCategoryActionCreator(''));
  };

  return (
    <section className="home-page">
      <div className="home-page-popular-category">
        <h2 className="category-header">Popular Category</h2>
        <CategoriesList
          threads={threadsList}
          clickCategory={onFilterCategory}
          clearCategory={clearActiveCategory}
          activeCategory={categories.activeCategory}
        />
      </div>
      <div className="home-page-body">
        <h2>Threads</h2>
        {categories.filteredCategories
          ? (
            <ThreadsList
              threads={
                categories.filteredCategories.map((thread) => ({
                  ...thread,
                  user: users.find((user) => user.id === thread.ownerId),
                  authUser: authUser.id,
                }))
              }
              like={onLikeThread}
              dislike={onDislikeThread}
              neutralize={onNeutralizeThread}
            />
          )
          : <ThreadsList threads={threadsList} like={onLikeThread} dislike={onDislikeThread} neutralize={onNeutralizeThread} />}

      </div>
      <Link to="/create">
        <button type="button" className="create-new-thread">
          <MdAddCircle />
        </button>
      </Link>
    </section>
  );
}

export default HomePage;
