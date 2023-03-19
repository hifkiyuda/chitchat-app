/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiBarChart2Fill, RiLogoutBoxFill } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header({ logout }) {
  return (
    <header className="app-header">
      <Link to="/">
        <img src={logo} alt="logo" className="app-logo" />
      </Link>
      <div className="navigation">
        <nav>
          <Link to="/"><AiFillHome /></Link>
          <Link to="/leaderboard"><RiBarChart2Fill /></Link>
        </nav>
        <button type="button" onClick={logout}><RiLogoutBoxFill /></button>
      </div>
    </header>
  );
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Header;
