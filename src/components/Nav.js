import React from 'react';
import Scroll from './Scroll';
import spotify from '../assets/images/spotify.png';
import itunes from '../assets/images/itunes.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import soundcloud from '../assets/images/soundcloud.png';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li onClick={onMenuToggle}>
                <Scroll type="id" element="page-wrapper">
                  Home
                </Scroll>
              </li>
              <li onClick={onMenuToggle}>
                <Scroll type="id" element="two" offset={-30}>
                  Songs
                </Scroll>
              </li>
              <li onClick={onMenuToggle}>
                <Scroll type="id" element="three">
                  Mission
                </Scroll>
              </li>
              <li onClick={onMenuToggle}>
                <Scroll type="id" element="cta">
                  Story
                </Scroll>
              </li>
              <li>
                <div className="artist-links">
                  <a
                    href="https://open.spotify.com/artist/2vg5kBllbmKWB9v52ZHhPL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={spotify} alt="" />
                  </a>
                  <a
                    href="https://www.apple.com/apple-music/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={itunes} alt="" />
                  </a>
                  <a
                    href="https://soundcloud.com/enderwright"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={soundcloud} alt="" />
                  </a>
                  <a
                    href="https://www.instagram.com/ender.wright/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="" />
                  </a>
                  <a
                    href="https://www.twitter.com/ender_wright"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="" />
                  </a>
                </div>
              </li>
            </ul>

            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
