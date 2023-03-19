import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadsList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <div className="home-page-popular-category">
        <h1>Popular Category</h1>
        <CategoriesList />
      </div>
      <div className="home-page-body">
        <h1>Threads</h1>
        <ThreadsList threads={threadsList} />
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
