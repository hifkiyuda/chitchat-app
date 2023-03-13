import React from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import Header from './components/Header';
import LeaderboardPage from './pages/LeaderboardPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <HomePage />
      <DetailPage />
      <CreatePage />
      <LeaderboardPage />
      <LoginPage />
      <RegisterPage />
    </div>
  );
}

export default App;
