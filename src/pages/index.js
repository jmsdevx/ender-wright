import React, { useState } from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import PriceIsPride from '../assets/images/PriceIsPride.jpg';
import Liar from '../assets/images/Liar.jpg';
import Pesos from '../assets/images/Pesos.jpg';
import Westside from '../assets/images/Westside.jpg';
import Anywhere from '../assets/images/Anywhere.jpg';
import config from '../../config';
import DropDown from '../components/Dropdown';
import Videos from '../components/Videos';

const IndexPage = () => {

  const [dropDownState, toggleDropDownState] = useState([]);

  const isMenuOpen = menuKey => {
    return dropDownState.includes(menuKey);
  }

  const updateOpenMenuState = (menuKey) => {
    if (isMenuOpen(menuKey)) {
      const lastState = [...dropDownState]
     const nextState = lastState.filter(item => item !== menuKey)
     toggleDropDownState(nextState);
    } else {
      const nextState = [...dropDownState];
      nextState.push(menuKey);
      toggleDropDownState(nextState);
    }
  }


  return (
    <Layout>
      <section id="banner">
        <div className="inner">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
          <ul className="actions special">
            <li>
              <Scroll type="id" element="one">
                <a href="/#" className="button primary">
                  Explore
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>
              A DEEP LOVE FOR THE ART OF RAP, <br />A PENCHANT FOR POP MELODIES,{' '}
              <br />
              AND THOUGHTFUL ANALYSIS OF HUMAN EMOTION.
            </h2>
            <p>
              These characteristics define ender's music, creating a sound{' '}
              <br />
              that can stand alongside the popular music of today.
            </p>
          </header>
          <ul className="icons major">
            <li>
              <span className="icon solid fa-globe-americas major style1">
                <span className="label">Lorem</span>
              </span>
            </li>
            <li>
              <span className="icon fa-heart major style2">
                <span className="label">Ipsum</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-music major style3">
                <span className="label">Dolor</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="two" className="wrapper alt style2 m-btm">
        <header className="major center-align">
          <h1>Songs</h1>
        </header>
        <section className="spotlight">
          <div className="image">
            <img src={PriceIsPride} alt="" />
          </div>
          <div className="content">
            <h2>
              Price Is Pride
            </h2>
            <p>
              A contemplative song about overcoming ego
              <br /> in order to save a relationship.
            </p>
          </div>
        </section>
          <DropDown toggleMenu={updateOpenMenuState} menuKey={'price'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Listen Now"}/>
          <DropDown toggleMenu={updateOpenMenuState} menuKey={'price'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Buy Now"}/>
        <section className="spotlight">
          <div className="image">
            <img src={Liar} alt="" />
          </div>
          <div className="content">
            <h2>
              Liar
            </h2>
            <p>
              A song that tells the story of two people <br />
              having their hearts broken. It slaps.
            </p>
          </div>
        </section>
        <DropDown toggleMenu={updateOpenMenuState} menuKey={'liar'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Listen Now"}/>
        <DropDown toggleMenu={updateOpenMenuState} menuKey={'liar'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Buy Now"}/>
        <section className="spotlight">
          <div className="image">
            <img src={Pesos} alt="" />
          </div>
          <div className="content">
            <h2>
              Pesos
            </h2>
            <p>
              A braggadocious song that provides <br />a heavy dose of autotune
              and fun.
            </p>
          </div>
        </section>
        <DropDown toggleMenu={updateOpenMenuState} menuKey={'pesos'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Listen Now"}/>
        <DropDown toggleMenu={updateOpenMenuState} menuKey={'pesos'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Buy Now"}/>
        <section className="spotlight">
          <div className="image">
            <img src={Westside} alt="" />
          </div>
          <div className="content">
            <h2>
              Westside
            </h2>
            <p>An upbeat summertime vibe.</p>
          </div>
        </section>
        <DropDown toggleMenu={updateOpenMenuState} menuKey={'westside'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Listen Now"}/>
        <DropDown toggleMenu={updateOpenMenuState} menuKey={'westside'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Buy Now"}/>
        <section className="spotlight">
          <div className="image">
            <img src={Anywhere} alt="" />
          </div>
          <div className="content">
            <h2>
              Anywhere
            </h2>
            <p>An autotune-heavy drugged-out love song.</p>
          </div>
        </section>
        <DropDown toggleMenu={updateOpenMenuState} menuKey={'anywhere'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Listen Now"}/>
        <DropDown toggleMenu={updateOpenMenuState} menuKey={'anywhere'} isMenuOpen={isMenuOpen} dropDownState={dropDownState} listenOrBuy={"Buy Now"}/>
      </section>

      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>Videos</h2>
          </header>
        </div>
        <Videos />
      </section>

      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Ender's Story</h2>
            <p>
              In 2016, Ender Wright was teaching English at a High School in New
              Jersey. One day, he was called into the principal's office and
              fired because a student had found all of his old music, which he
              had written and recorded in his teens and early twenties. In two
              days, it had circulated through the school like wildfire. In
              response to the firing, he recorded a new mixtape and blasted it
              to every student through the school's communication portal. After
              saving up some money, he packed up his Corolla and drove it to Los
              Angeles, to once again pursue a life in music. Now, he is both an
              artist and songwriter who works tirelessly to create the dopest
              music possible.
              <br />
            </p>
          </header>
          <ul className="actions stacked">
            <li>
              <h4>Management:</h4>
              <p>
                Simone Sacco
                <br />
                simone.sacco@gmail.com
                <br />
                916-873-3194
              </p>
            </li>
            <li>
              <a href="/#" className="button fit">
                Back To Top
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
