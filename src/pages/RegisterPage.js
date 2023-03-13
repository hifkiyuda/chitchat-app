import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  return (
    <section className="register-page">
      <div className="register-box">
        <h1>Register to Chitchat</h1>
        <RegisterInput />
        <p>
          Already have an account?
          {' '}
          <Link to="/signin">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
