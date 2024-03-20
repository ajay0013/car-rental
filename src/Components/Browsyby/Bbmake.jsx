import React from "react";
import "./Bbmake.css";

export default function Bbmake(props) {
    return(
        <a className= "bbmake" href={props.link}>
            <div className="car--image">
                <img src={props.image} alt="car ki "/>
            </div>
            <div className="car--name">
                <p>{props.name}</p>
            </div>
        </a>
    )
}