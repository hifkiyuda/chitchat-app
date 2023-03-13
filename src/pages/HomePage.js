import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ThreadsList from '../components/ThreadsList';

function HomePage() {
  return (
    <section className="home-page">
      <Header />
      <ThreadsList />
    </section>
  );
}

export default HomePage;
