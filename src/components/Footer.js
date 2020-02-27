import React from 'react';
import config from '../../config';
import spotify from '../assets/images/spotify.png';
import itunes from '../assets/images/itunes.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';
import soundcloud from '../assets/images/soundcloud.png';
import linkedin from '../assets/images/linkedin.png';
import '../assets/sass/footer.scss';

export default function Footer() {
  return (
    <footer id="footer">
      <h1>Find Ender Wright</h1>
      <div className="artist-links-row">
        <a
          href="https://open.spotify.com/artist/2vg5kBllbmKWB9v52ZHhPL"
          target="_blank"
        >
          <img src={spotify} alt="" />
        </a>
        <a href="https://www.apple.com/apple-music/" target="_blank">
          <img src={itunes} alt="" />
        </a>
        <a href="https://soundcloud.com/enderwright" target="_blank">
          <img src={soundcloud} alt="" />
        </a>
        <a href="https://www.instagram.com/ender.wright/" target="_blank">
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.twitter.com/ender_wright" target="_blank">
          <img src={twitter} alt="" />
        </a>
      </div>
      <div className="author">
        <h4>Web Experience Created By James Sheehan -- Jmsdevx@gmail.com</h4>
        <a
          href="https://www.linkedin.com/in/jmsdevx/"
          className="author__links"
          target="_blank"
        >
          <img src={linkedin} alt="" />
        </a>
      </div>
      <ul className="copyright">
        <li>&copy; Spectral</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{' '}
          <a
            href="https://www.flaticon.com/authors/flat-icons"
            title="Flat Icons"
          >
            Flat Icons
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}
            www.flaticon.com
          </a>
        </li>
      </ul>
    </footer>
  );
}
