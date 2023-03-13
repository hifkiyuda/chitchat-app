import React from 'react';
// import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';
import CategoriesList from '../components/CategoriesList';
import ThreadsList from '../components/ThreadsList';

function HomePage() {
  return (
    <section className="home-page">
      <div className="home-page-popular-category">
        <h1>Popular Category</h1>
        <CategoriesList />
      </div>
      <div className="home-page-body">
        <h1>Threads</h1>
        <ThreadsList />
      </div>
      <button type="button" className="create-new-thread">
        <MdAddCircle />
      </button>
    </section>
  );
}

export default HomePage;
