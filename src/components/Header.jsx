import React from 'react';
import { RiBarChart2Fill, RiLogoutBoxFill, RiChat1Fill } from 'react-icons/ri';
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
          <Link to="/"><RiChat1Fill /></Link>
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
