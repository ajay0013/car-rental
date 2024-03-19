import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import mall from "../../Assets/mall.png";
import types from "../../Assets/types.png";
import repair from "../../Assets/repair-tool.png";
import abt from "../../Assets/abt-turo.jpeg";
import meetteam from "../../Assets/meet-the-team.png";
import touch from "../../Assets/touch.jpg";

export default function About() {
  return (
    <div className="about">
      <div className="about-contents">
        <div className="abt-turo">
          <div className="car-img">
            <img src={abt} alt="about ki " />
          </div>

          <div className="text">
            <h1>About Turo</h1>
            <p>
              {" "}
              Take a loook under the hood of the world's largest car sharing
              marketplace.
            </p>
          </div>
        </div>

        <div className="find-drive">
          <div className="fd1">
            <h2>Find your drive</h2>
            <p>
              Turo is the world's largest car sharing marketplace, where you can
              book the perfect car for wherever you're going from a vibrant
              community of trusted hosts across the US, UK, Canada, Australia,
              and France. Flying in from afar or looking for a car down the
              street, searching for a rugged truck or something smooth and
              swanky, you can skip the rental car counter and choose from an
              extraordinary, totally unique selection of nearby vehicles shared
              by local hosts. Entrepreneurs can take the wheel of their futures
              by becoming hosts and building car sharing businesses on Turo,
              leveraging our established platform to scale their businesses to
              meet their goals.
            </p>
            <p>
              With an unwavering mission of putting the world's 1.5 billion cars
              to better use, Turo unlocks the hidden value in idle and
              underutilized assets, empowering anyone to get in the driver's
              seat.
            </p>
          </div>
        </div>

        <div className="plan-trip">
          <div className="pt1">
            <div className="pttext">
              <p1>Plan your trip now</p1>
              <p2>Quick & easu car rental</p2>
            </div>
            <div className="pln-logo">
              <div className="pln">
                <img src={types} alt="type ki pic" />
                <div className="pln-label">
                  <p1>20</p1>
                  <p2>
                    Car <br /> Types
                  </p2>
                </div>
              </div>
              <div className="pln">
                <img src={mall} alt="mall ki pic" />
                <div className="pln-label">
                  <p1>85</p1>
                  <p2>
                    Rental <br /> Outlets
                  </p2>
                </div>
              </div>
              <div className="pln">
                <img src={repair} alt="repair ki pic" />
                <div className="pln-label">
                  <p1>75</p1>
                  <p2>
                    Repair <br /> Shops
                  </p2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="team">
          <div className="team-contents">
            <div className="meet">
              <p1>Meet the team</p1>
              <p2>
                From the executive leadership team to the board of directors,
                get to know the leadership team pioneering the way to put the
                world's 1.5 billion cars to better use.
              </p2>

              <Link to="/team" className="ghgh">
                <button>
                  <p>Meet the team</p>
                </button>
              </Link>
            </div>

            <div className="threecars">
              <img src={meetteam} alt="team meet ka imahe" />
            </div>
          </div>
        </div>

        <div className="touch" style={{ backgroundImage: `url(${touch})` }}>
          <div className="touch-conntents">
            <p>Book a car by getting in touch with us</p>
            <div className="phicn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="tabler-icon tabler-icon-phone"
              >
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>
              <p>(123) 456-789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
