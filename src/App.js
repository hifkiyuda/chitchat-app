import React from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app-container">
      <LoginPage />
      <RegisterPage />
      <HomePage />
    </div>
  );
}

export default App;
