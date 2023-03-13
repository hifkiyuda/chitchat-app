/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { RiBarChart2Fill, RiLogoutBoxFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
  return (
    <header className="app-header">
      <img src={logo} alt="logo" className="app-logo" />
      <div className="navigation">
        <nav>
          <Link><AiFillHome /></Link>
          <Link><RiBarChart2Fill /></Link>
        </nav>
        <button><RiLogoutBoxFill /></button>
      </div>
    </header>
  );
}

export default Header;
