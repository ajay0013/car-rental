import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Team.css";

import employees from "./EmployeesData";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="team">
      <div className="team-content">
        <div className="intro">
          <p1>Meet the team</p1>
          <p2>
            Get to know the people behind the wheel of the world's largest car
            sharing marketplace
          </p2>
        </div>

        <div className="cards">
          <div className="allemp">{employees.map(teamCards)}</div>
        </div>

      </div>

        <div className="hired">
          <div className="hired-contents">
            <div className="hrd">
              <div className="htext">
                <p1>Join the team</p1>
                <p2>Help put the world's 1.5 billion cars to better use</p2>
              </div>

              <div className="hjoin">
                <Link to="/contact">
                <button>
                  <p>See all positions</p>
                </button>
                </Link>
              </div>
              </div>
          </div>
        </div>
    </div>
  );
}

function teamCards(employees) {
  return (
    <div className="caard">
      <div className="card-content">
        <div className="profilepic">
          <img src={employees.image} alt="selfie" />
        </div>

        <div className="detail">
          <div className="naame">
            <span>{employees.name}</span>
          </div>

          <div className="title">
            <p>{employees.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
