import React, { useState } from 'react';
import Nav from './Nav';
import LinkNav from './LinkNav';
import Scroll from '../components/Scroll';
import '../assets/sass/sidebar.scss';

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <Scroll type="id" element="page-wrapper">
        <h2 className="title-name">Ender Wright</h2>
      </Scroll>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}
