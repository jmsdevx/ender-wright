import React from 'react';
import { links } from '../assets/links/links'
import spotify from '../assets/images/spotify.png';
import itunes from '../assets/images/itunes.png';
import soundcloud from '../assets/images/soundcloud.png';
import google from '../assets/images/google4.png';
import '../assets/sass/dropdown.scss';

export default function Dropdown(
props
) {
  const { toggleMenu, menuKey, dropDownState, listenOrBuy } = props;
  const subKey = listenOrBuy.substr(0, listenOrBuy.indexOf(' ')).toLowerCase();

  return (
    <>
      <div
        className={`dropdown ${listenOrBuy === 'Listen Now' ? 'listen' : 'buy'}`}
        onClick={() => toggleMenu(menuKey + subKey)}>
        <p>{listenOrBuy}</p>
        <span className="icon solid fa-angle-down" />
      </div>
      { dropDownState.includes(menuKey + subKey) &&
      <div>
        {
          listenOrBuy === 'Listen Now' &&
          <div className="listen-now">
            <a
              href={links[menuKey][subKey].spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={spotify} alt="" className="link-icon" />
            </a>
            <a
              href={links[menuKey][subKey].apple}
              rel="noopener noreferrer"
            >
              <img src={itunes} alt="" className="link-icon" />
            </a>
            <a
              href={links[menuKey][subKey].soundcloud}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={soundcloud} alt="" className="link-icon" />
            </a>
          </div>
        }
        {
          listenOrBuy === 'Buy Now' &&
          <div className="listen-now">
            <a
              href={links[menuKey][subKey].itunes}
              rel="noopener noreferrer"
            >
              <img src={itunes} alt="" className="link-icon" />
            </a>
            <a
              href={links[menuKey][subKey].googleplay}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={google} alt="" className="link-icon" />
            </a>
          </div>
        }
      </div>
      }
    </>
  );
}
