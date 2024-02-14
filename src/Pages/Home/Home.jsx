import React from "react";
import "./Home.css";
import homeOne from "../../Assets/homeOne.jpg";
import DatePicker from "react-datepicker";
import { useState } from "react";

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

      
    </div>
  );
}
