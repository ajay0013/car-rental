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
          <div className="make--body" ref={scrollRef} >{BbmakeData.map(createCardsMake)}</div>
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
        <div className="bg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 846 484"
            class="e1u4lv874 seo-pages-xjn11h"
            height="484px"
            role="img"
            version="1.1"
            width="846px"
          >
            <path
              fill="#fbf9f6"
              d="M265.58 51.77c64.29 18 127.35 41.95 193.12 51.72 72.43 10.75 147.75 4.31 217.09 29.3 80.49 29 199.52 135.19 162.35 239.88-20.41 57.47-85.21 82.21-136.2 95.7-61.13 16.16-125.2 16.23-187.48 9.1-68.73-7.86-136.84-40.12-198.13-73-61.57-33.05-132.45-33-198-51.4-23-6.45-45.88-15.36-65-30.59C-7.58 274.05-13.93 154.9 27.71 91c20.47-31.42 54.87-50 90-56.26s71.2-1.39 106.08 6.43a760.59 760.59 0 0 1 41.79 10.6z"
            ></path>
          </svg>
        </div>
        <div className="contents">
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
