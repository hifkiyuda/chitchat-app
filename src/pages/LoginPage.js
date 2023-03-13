import React from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  return (
    <section className="login-page">
      <div className="login-box">
        <h1>Login to Chitchat</h1>
        <LoginInput />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/signup">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;
