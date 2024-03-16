import React from "react";
import "./Bbexperience.css";

export default function Bbexperience(props) {
    return(
        <a className= "bbexperience" href={props.link}>
            <div className="exp--image">
                <img src={props.image} alt="bbexp"/>
            </div>
            <div className="exp--name">
                {props.svg}
                <p>{props.name}</p>
            </div>
        </a>
    )
}