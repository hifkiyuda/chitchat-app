import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncToogleDislikeThread, asyncToogleLikeThread, asyncToogleNeutralizeThread } from '../states/threads/action';

function HomePage() {
  const [filteredCategories, setFilteredCategories] = useState('');
  const [showAllThreads, setShowAllThreads] = useState(false);

  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLikeThread = (id) => {
    dispatch(asyncToogleLikeThread(id));
  };

  const onDislikeThread = (id) => {
    dispatch(asyncToogleDislikeThread(id));
  };

  const onNeutralizeThread = (id) => {
    dispatch(asyncToogleNeutralizeThread(id));
  };

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const mappedThreads = threads.map((thread) => thread);

  const onFilterCategory = (selectedCategory) => {
    if (showAllThreads) {
      setFilteredCategories(mappedThreads);
      setShowAllThreads(false);
    } else {
      const result = mappedThreads.filter((thread) => thread.category === selectedCategory);
      setFilteredCategories(result);
      setShowAllThreads(true);
    }
  };

  return (
    <section className="home-page">
      <div className="home-page-popular-category">
        <h2 className="category-header">Popular Category</h2>
        <CategoriesList threads={threadsList} clickCategory={onFilterCategory} />
      </div>
      <div className="home-page-body">
        <h2>Threads</h2>
        {filteredCategories
          ? (
            <ThreadsList
              threads={
                filteredCategories.map((thread) => ({
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
