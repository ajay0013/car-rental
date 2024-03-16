import React from "react";
import { useEffect } from "react";
import "./Contact.css";

export default function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="contact">
      <div className="contact-contents">
        <div className="chead">
          <p>Send us a message</p>
        </div>

        <div className="cform">
          <div className="focontent">
            <input
              type="name"
              name="name"
              placeholder="Name"
              className="ipt"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="ipt"
              required
            />
            <input
              type="number"
              name="number"
              placeholder="+1 (123) 456-7890"
              className="ipt"
              id="nu"
              required
            />
            <textarea
              placeholder="Your message"
              className="ipt"
              id="ipt1"
              required
            />
            <button className="fsub">
              <p>Submit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
