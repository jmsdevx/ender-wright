import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import PriceIsPride from '../assets/images/PriceIsPride.jpg';
import Liar from '../assets/images/Liar.jpg';
import Pesos from '../assets/images/Pesos.jpg';
import Westside from '../assets/images/Westside.jpg';
import Anywhere from '../assets/images/Anywhere.jpg';
import Candlelight from '../assets/images/Candlelight.jpg';
import Sometimes from '../assets/images/Sometimes.jpg';
import config from '../../config';
const IndexPage = () => (
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
            These characteristics define ender's music, creating a sound
            <br />
            that can stand alongside the popular music of today.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
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

    <section id="two" className="wrapper alt style2">
      <header className="major center-align">
        <h1>Songs</h1>
      </header>
      <section className="spotlight">
        <div className="image">
          <img src={PriceIsPride} alt="" />
        </div>
        <div className="content">
          <h2>
            Price Is Pride{' -- '}
            <br />
            March 1st
          </h2>
          <p>
            A contemplative song about overcoming ego
            <br /> in order to save a relationship.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={Liar} alt="" />
        </div>
        <div className="content">
          <h2>
            Liar{' -- '}
            <br />
            March 15th
          </h2>
          <p>
            A song that tells the story of two people <br />
            having their hearts broken. It slaps.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={Pesos} alt="" />
        </div>
        <div className="content">
          <h2>
            Pesos{' -- '}
            <br />
            April 1st
          </h2>
          <p>
            A braggadocious song that provides <br />a heavy dose of autotune
            and fun.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={Westside} alt="" />
        </div>
        <div className="content">
          <h2>
            Westside{' -- '}
            <br />
            April 15th
          </h2>
          <p>An upbeat summertime vibe.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={Anywhere} alt="" />
        </div>
        <div className="content">
          <h2>
            Anywhere{' -- '}
            <br />
            May 1st
          </h2>
          <p>An autotune-heavy drugged-out love song.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={Candlelight} alt="" />
        </div>
        <div className="content">
          <h2>
            Candlelight{' -- '}
            <br />
            May 15th
          </h2>
          <p>A song for and about people who love having sex.</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={Sometimes} alt="" />
        </div>
        <div className="content">
          <h2>
            Sometimes{' -- '}
            <br />
            June 1st
          </h2>
          <p>
            A stoney vibe about the ups and downs
            <br /> of making music for a living.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Mission</h2>
          <p>
            Write a great song. Get it placed or put it out myself. <br />
            Repeat forever. Be happy.
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-headphones-alt">
            <h3>Genre</h3>
            <p>
              Hip Hop
              <br />
              Emo Rap
              <br />
              Pop
            </p>
          </li>
          <li className="icon solid fa-paint-brush">
            <h3>Similar Artists</h3>
            <p>
              Post Malone
              <br />
              Blackbear
              <br />
              Russ
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Themes</h3>
            <p>
              Love
              <br />
              Relationships
              <br />
              Ambition
              <br />
              Enjoying the little things
              <br />
            </p>
          </li>
          <li className="icon fa-lightbulb">
            <h3>Inspiration</h3>
            <p>
              Kid Cudi
              <br />
              Lupe Fiasco
              <br />
              Outkast
              <br />
              Frank Ocean
              <br />
              Blink 182
            </p>
          </li>
          <li className="icon solid fa-chart-pie">
            <h3>Demographics</h3>
            <p>
              <strong>Gender: 7%:</strong> m (53%) f (47%)
              <br />
              <strong>Core Demo:</strong> Ages 18-34
              <br />
              <strong>Location:</strong> LA (26%) NYC (10%)
            </p>
          </li>
          <li className="icon fa-chart-bar">
            <h3>Market Potential</h3>
            <p>
              Grow Payday Vibes
              <br />
              Develop A Strong Fanbase
              <br />
              Write Songs For Other Artists
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Ender's Story</h2>
          <p>
            In 2016, Ender Wright was teaching English at a high school in New
            Jersey. One day, he was called into the principals office (as a
            teacher) and FIRED for the content in his music, found by a student.
            Ender's rap journey started at age 14, after which he wrote
            thousands of songs and freestyled countless hours. Ender's life
            drastically changed when his decade old mixtape circulated the
            school like wildfire. In response, he recorded a NEW mixtape and
            blasted it to every student through the school's communication
            portal. SAVAGE. Always moving forward, he packed up his Corolla and
            drove it to Los Angeles, to once again pursue a life in music.
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

export default IndexPage;
