import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./Home.css";
import homeOne from "../../Assets/homeOne.jpg";
import Bbmake from "../../Components/Browsyby/Bbmake";
import Bbplace from "../../Components/Browsyby/Bbplace";
import Bbexperience from "../../Components/Browsyby/Bbexperience";

import BbmakeData from "./BbmakeData";
import BbLocalPlaceData from "./BbLocalPlaceData";
import BbInterPlaceData from "./BbInterPlaceData";
import Bbexperiencedata from "./Bbexperiencedata";

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="home--page">
      <div className="home--search">
        <div className="search--image">
          <img alt="banda" src={homeOne} />
        </div>

        <div className="search--container">
          <div className="search--home">
            <form className="searchee" autoComplete="off">
              <div className="location">
                <div className="where">Where</div>
                <input
                  autoComplete="off"
                  placeholder="City, airport, ddress or hotel"
                ></input>
              </div>

              <div className="from--until">
                <div className="from">
                  <p>From</p>
                  <input placeholder="date--from"></input>
                </div>

                <div className="to">
                  <p>Until</p>
                  <input placeholder="date--to"></input>
                </div>
              </div>

              <div className="search--btn">
                <Link to="/vehicles">
                  <button className="search--submit"></button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="find--car--text">
        <p1>Find your drive</p1>
        <p2>Explore the world's largest car sharing marketplace</p2>
      </div>

      <div className="browse--by--make" id="make">
        <div className="make--components">
          <div className="make--header">
            <div className="make--text">
              <p>Browse by make</p>
            </div>

            <div className="make--btns">
              <button className="make--left" onClick={() => scroll(-210)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="seo-pages-1o6k71p"
                  role="img"
                  version="1.1"
                >
                  <path
                    fill="#121214"
                    fill-rule="evenodd"
                    d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="make--right" onClick={() => scroll(210)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="seo-pages-1o6k71p"
                  role="img"
                  version="1.1"
                >
                  <path
                    fill="#121214"
                    fill-rule="evenodd"
                    d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="make--body" ref={scrollRef}>
            {BbmakeData.map(createCardsMake)}
          </div>
        </div>
      </div>

      <div className="browse--by--make" id="local_destination">
        <div className="make--components">
          <div className="make--header">
            <div className="make--text">
              <p>Browse by local destination</p>
            </div>

            <div className="make--btns">
              <button className="make--left" onClick={() => scroll(-175)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="seo-pages-1o6k71p"
                  role="img"
                  version="1.1"
                >
                  <path
                    fill="#121214"
                    fill-rule="evenodd"
                    d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="make--right" onClick={() => scroll(175)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="seo-pages-1o6k71p"
                  role="img"
                  version="1.1"
                >
                  <path
                    fill="#121214"
                    fill-rule="evenodd"
                    d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="make--body" ref={scrollRef}>
            {BbLocalPlaceData.map(createCardsPlaceLocal)}
          </div>
        </div>
      </div>

      <div className="browse--by--make" id="international_destination">
        <div className="make--components">
          <div className="make--header">
            <div className="make--text">
              <p>Browse by international destination</p>
            </div>

            <div className="make--btns">
              <button className="make--left" onClick={() => scroll(-175)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="seo-pages-1o6k71p"
                  role="img"
                  version="1.1"
                >
                  <path
                    fill="#121214"
                    fill-rule="evenodd"
                    d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="make--right" onClick={() => scroll(175)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="seo-pages-1o6k71p"
                  role="img"
                  version="1.1"
                >
                  <path
                    fill="#121214"
                    fill-rule="evenodd"
                    d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="make--body" ref={scrollRef}>
            {BbInterPlaceData.map(createCardsPlaceInter)}
          </div>
        </div>
      </div>

      <div className="browse--by--make" id="experience">
        <div className="make--components">
          <div className="make--header">
            <div className="make--text">
              <p>Browse by experience</p>
            </div>

            <div className="make--btns">
              <button className="make--left" onClick={() => scroll(-360)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="seo-pages-1o6k71p"
                  role="img"
                  version="1.1"
                >
                  <path
                    fill="#121214"
                    fill-rule="evenodd"
                    d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <button className="make--right" onClick={() => scroll(360)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  fill="none"
                  viewBox="0 0 16 16"
                  class="seo-pages-1o6k71p"
                  role="img"
                  version="1.1"
                >
                  <path
                    fill="#121214"
                    fill-rule="evenodd"
                    d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="make--body" ref={scrollRef}>
            {Bbexperiencedata.map(createCardsexperience)}
          </div>
        </div>
      </div>

      <div className="car--host">
        <div className="conte nts">
          <div className="book--car">
            <div className="chtext">
              <Link to="/vehicles">
                <p1>Book a car &gt;</p1>
              </Link>
              <p2>
                Down the street or across the country, find the perfect vehicle
                for your next adventure.
              </p2>
            </div>
          </div>
          <div className="become--host">
            <div className="chtext">
              <Link to="/contact">
                <p1>Become a host &gt;</p1>
              </Link>
              <p2>
                Accelerate your entrepreneurship and start building a small car
                sharing business on Turo.
              </p2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function createCardsMake(BbmakeData) {
  return (
    <Bbmake
      key={BbmakeData.id}
      link={BbmakeData.link}
      image={BbmakeData.image}
      name={BbmakeData.name}
    />
  );
}

function createCardsPlaceLocal(BbLocalPlaceData) {
  return (
    <Bbplace
      key={BbLocalPlaceData.id}
      link={BbLocalPlaceData.link}
      image1={BbLocalPlaceData.image1}
      image2={BbLocalPlaceData.image2}
      name={BbLocalPlaceData.name}
    />
  );
}

function createCardsPlaceInter(BbInterPlaceData) {
  return (
    <Bbplace
      key={BbInterPlaceData.id}
      link={BbInterPlaceData.link}
      image1={BbInterPlaceData.image1}
      image2={BbInterPlaceData.image2}
      name={BbInterPlaceData.name}
    />
  );
}

function createCardsexperience(Bbexperiencedata) {
  return (
    <Bbexperience
      key={Bbexperiencedata.id}
      link={Bbexperiencedata.link}
      image={Bbexperiencedata.image}
      svg={Bbexperiencedata.svg}
      name={Bbexperiencedata.name}
    />
  );
}
