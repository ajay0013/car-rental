import React from "react";
import "./Bbplace.css";

export default function Bbplace(props) {
    return(
        <a className= "bbplace" href={props.link}>
            <div className="car--image">
                <img className="place--img--1" src={props.image1} alt="car ki image1"/>
                <img className="place--img--2" src={props.image2} alt="car ki image2"/>
            </div>
            <div className="place--name">
                <p>{props.name}</p>
            </div>
        </a>
    )
}