import React from "react";
import "./Home.css";
import homeOne from "../../Assets/homeOne.jpg";


export default function Home() {
  return (
    <div className="home--page">
      <div className="home--search">
        <div className="search--image">
          <img alt="banda" src={homeOne} />
        </div>

        <div className="search--container">
          <div className="search--home">
            <form className="search" autoComplete="off">
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

                <div className="from">
                  <p>Until</p>
                  <input placeholder="date--to"></input>
                </div>
              </div>

              <div className="search--btn">
                <button className="search--submit"></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="find--car--text">
        <p1>Find your drive</p1>
        <p2>Explore the world's largest car sharing marketplace</p2>
      </div>
      

      <div className="browse--by--make">
        <div className="make--components">

          <div className="make--header">
            <div className="make--text">
              <p>Browse by make</p>
            </div>

            <div className="make--btns">
              <button className="make--left">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="none" viewBox="0 0 16 16" class="seo-pages-1o6k71p" role="img" version="1.1"><path fill="#121214" fill-rule="evenodd" d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z" clip-rule="evenodd"></path></svg>
              </button>
              <button className="make--right">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="none" viewBox="0 0 16 16" class="seo-pages-1o6k71p" role="img" version="1.1"><path fill="#121214" fill-rule="evenodd" d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
          </div>
          <div className="make--body">
              <p>body</p>
          </div>

        </div>
      </div>
    </div>
  );
}
