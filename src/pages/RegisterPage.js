import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="register-page">
      <div className="register-box">
        <h1>Register to Chitchat</h1>
        <RegisterInput register={onRegister} />
        <p>
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
