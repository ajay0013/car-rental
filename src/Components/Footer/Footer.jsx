import React from "react";
import "./Footer.css";
import { useState } from "react";

import playstore from "../../Assets/play-store.svg";
import appstore from "../../Assets/app-store.svg";
import up from "../../Assets/up.png";
import down from "../../Assets/down.png";

export default function Footer() {
  const [drop, setDrop] = useState({
    d1: false,
    d2: false,
    d3: false,
    d4: false,
    d5: false,
    d6: false,
    d7: false,
  });

  const toggleDrop = (d) => {
    setDrop((prevStates) => ({
      ...prevStates,
      [d]: !prevStates[d],
    }));
  };

  return (
    <footer className="footer">
      <div className="footer--content">
        <div className="sec-1">
          <div className="sec-11">
            <div className="turo">
              <h2>Turo</h2>
              <ol>
                <li>About</li>
                <li>Team</li>
                <li>Policies</li>
                <li>Careers</li>
                <li>Press</li>
                <li>OpenRoad</li>
                <li>Turo shop</li>
              </ol>
            </div>
            <div className="footlocations">
              <h2>Locations</h2>
              <ol>
                <li>USA (EN)</li>
                <li>Australia (EN)</li>
                <li>Canada (EN)</li>
                <li>Canada (FR)</li>
                <li>France (FR)</li>
                <li>UK (EN)</li>
              </ol>
            </div>
            <div className="explore">
              <h2>Explore</h2>
              <ol>
                <li>Book a car</li>
                <li>Weddings</li>
                <li>Trust & safety</li>
                <li>Get help</li>
              </ol>
            </div>
            <div className="hosting">
              <h2>Hosting</h2>
              <ol>
                <li>List your car</li>
                <li>Carculator</li>
                <li>All-Star Hosts</li>
                <li>Host tools</li>
                <li>Insurance & protection</li>
              </ol>
            </div>
          </div>
          <div className="logos">
            <div className="social">
              <ol>
                <li>
                  <a href="http://www.facebook.com/turo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="seo-pages-0"
                      role="img"
                      version="1.1"
                    >
                      <path
                        fill="#121214"
                        fill-rule="evenodd"
                        d="M22.001 12c0-5.523-4.477-10-10-10C6.477 2 2 6.477 2 12c0 4.992 3.657 9.13 8.438 9.88V14.89h-2.54v-2.89h2.54V9.796c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.239.195 2.239.195v2.46h-1.261c-1.242 0-1.63.772-1.63 1.563V12h2.774l-.444 2.891h-2.33v6.988c4.781-.75 8.438-4.887 8.438-9.879Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="http://www.twitter.com/turo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="seo-pages-0"
                      role="img"
                      version="1.1"
                    >
                      <path
                        fill="#121214"
                        fill-rule="evenodd"
                        d="M21 6.73a7.3 7.3 0 0 1-2.125.583A3.678 3.678 0 0 0 20.5 5.27c-.708.417-1.5.729-2.333.896A3.777 3.777 0 0 0 15.458 5a3.681 3.681 0 0 0-3.687 3.688c0 .291.02.583.083.854-3.062-.167-5.77-1.563-7.604-3.792-.313.542-.5 1.104-.5 1.792 0 1.27.646 2.396 1.646 3.062a3.757 3.757 0 0 1-1.667-.458v.041a3.69 3.69 0 0 0 2.959 3.626 3.82 3.82 0 0 1-1.667.062 3.68 3.68 0 0 0 3.437 2.563c-1.25 1-2.854 1.75-4.583 1.75-.292 0-.583-.021-.875-.063 1.625 1.042 3.583 1.5 5.667 1.5 6.791 0 10.5-5.625 10.5-10.5v-.48A7.648 7.648 0 0 0 21 6.73Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/turo/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="seo-pages-0"
                      role="img"
                      version="1.1"
                    >
                      <path
                        fill="#121214"
                        fill-rule="evenodd"
                        d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.419A4.411 4.411 0 0 0 4.51 4.51c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.594.5.5 1.002.808 1.594 1.038.572.223 1.226.375 2.184.419.96.044 1.267.054 3.71.054 2.445 0 2.752-.01 3.712-.054.958-.044 1.612-.196 2.184-.419a4.41 4.41 0 0 0 1.594-1.038c.5-.5.808-1.002 1.038-1.594.223-.572.375-1.226.419-2.184.043-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.411 4.411 0 0 0 19.49 4.51a4.41 4.41 0 0 0-1.594-1.038c-.572-.223-1.226-.375-2.184-.419C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67a2.79 2.79 0 0 1-.673 1.036c-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.788 2.788 0 0 1-1.035-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Zm-.017 10.356a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.243 4.622 4.622 0 0 0 0-9.243Zm5.171-.025a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="http://www.youtube.com/turo">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="seo-pages-0"
                      role="img"
                      version="1.1"
                    >
                      <path
                        fill="#121214"
                        fill-rule="evenodd"
                        d="M22.54 6.842a2.721 2.721 0 0 0-1.945-1.894C18.875 4.5 12 4.5 12 4.5s-6.875 0-8.595.448c-.95.25-1.692.972-1.945 1.894C1 8.514 1 12 1 12s0 3.486.46 5.158a2.721 2.721 0 0 0 1.945 1.894C5.125 19.5 12 19.5 12 19.5s6.875 0 8.595-.448a2.721 2.721 0 0 0 1.945-1.894C23 15.486 23 12 23 12s0-3.486-.46-5.158ZM9.75 15.166V8.834L15.5 12l-5.75 3.166Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://turo.com/blog/canada/" id="blog">
                    {" "}
                    BLOG{" "}
                  </a>
                </li>
              </ol>
            </div>

            <div className="store">
              <ol>
                <li>
                  <a href="https://itunes.apple.com/app/relayrides/id555063314?mt=8&ls=1">
                    <img src={playstore} alt="playstore" />
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.relayrides.android.relayrides">
                    <img src={appstore} alt="appstore" />
                  </a>
                </li>
              </ol>
            </div>

            <div className="language">
              <svg
                class="seo-pages-0"
                data-testid="IconCanada"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.7 22.7c1.6.8 3.4 1.3 5.3 1.3s3.7-.5 5.3-1.3V1.3C15.7.5 13.9 0 12 0S8.3.5 6.7 1.3v21.4z"
                  fill="#fff"
                ></path>
                <path
                  d="M6.7 1.3C2.7 3.2 0 7.3 0 12c0 4.7 2.7 8.8 6.7 10.7V1.3zm10.6 0v21.5c3.9-2 6.7-6 6.7-10.7 0-4.8-2.7-8.9-6.7-10.8zM15.8 11l-.5 1 .4.1c.1.1.1.2.1.3 0 .1 0 .2-.1.3L14.4 14h-1.6l-.3 1.5c0 .1-.1.1-.1.1h-.5c-.1 0-.1-.1-.1-.1l-.3-1.5H9.9l-1.3-1.3c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3l.2-.2-.5-1v-.1h.1l1 .5.2-.2c.1-.1.4-.1.8.1.067.067.133.044.2.022a.322.322 0 0 1 .1-.022s.1-.2.1-.3l-.3-1.5v-.1h.1l1 .5.5-1.5c0-.1.1-.1.1 0l.5 1.5 1-.5h.1v.1l-.3 1.5c-.1.1 0 .3.1.3.1.1.2.1.3 0 .2-.2.4-.2.6 0l.2.2 1-.5h.1v.1z"
                  fill="#FF3131"
                ></path>
              </svg>
              <p>English</p>
            </div>
          </div>
        </div>
        <div className="sec-2">
          <div className="sec-22">
            <div className="vehicle--types">
              <h2>Vehicle types</h2>
              <ol>
                <li>Cars</li>
                <li>Vans</li>
                <li>Trucks</li>
                <li>Exotic & Luxury</li>
                <li>Sport</li>
                <li>Classics</li>
                <li>Convertibles</li>
                <li>Electric Vehicles</li>
                <li>SUVs</li>
                <li>Minivans</li>
              </ol>
            </div>

            <div className="makes">
              <h2>Makes</h2>
              <ol>
                <li>Tesla</li>
                <li>Toyota</li>
                <li>BMW</li>
                <li>Jeep</li>
                <li>Nissan</li>
                <li>Chevrolet</li>
                <li>Ford</li>
                <li>GMC</li>
                <li>Mercedes-Benz</li>
                <li>Ferrari</li>
              </ol>
            </div>

            <div className="top-cities">
              <h2>Top cities</h2>
              <ol>
                <li>Banff</li>
                <li>Calgary</li>
                <li>Charlotte Town</li>
                <li>Edmonton</li>
                <li>Fredericton</li>
                <li>Halifax</li>
                <li>Jasper</li>
                <li>Kelowna</li>
                <li>Moncton</li>
                <li>Montréal</li>
                <li>Niagara Falls</li>
                <li>Ottawa</li>
                <li>Quebec City</li>
                <li>Saint John</li>
                <li>St. John's</li>
                <li>Toronto</li>
                <li>Vancouver</li>
                <li>Victoria</li>
                <li>Whistler</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="sec-3">
          <div className="sec-33">
            <ol>
              <li>©2024 Turo</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Cookie preferences</li>
              <li>Do not sell or share my personal information</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="footer--content--2">
        <div className="logos">
          <div className="social">
            <ol>
              <li>
                <a href="http://www.facebook.com/turo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="seo-pages-0"
                    role="img"
                    version="1.1"
                  >
                    <path
                      fill="#121214"
                      fill-rule="evenodd"
                      d="M22.001 12c0-5.523-4.477-10-10-10C6.477 2 2 6.477 2 12c0 4.992 3.657 9.13 8.438 9.88V14.89h-2.54v-2.89h2.54V9.796c0-2.506 1.493-3.89 3.777-3.89 1.095 0 2.239.195 2.239.195v2.46h-1.261c-1.242 0-1.63.772-1.63 1.563V12h2.774l-.444 2.891h-2.33v6.988c4.781-.75 8.438-4.887 8.438-9.879Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com/turo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="seo-pages-0"
                    role="img"
                    version="1.1"
                  >
                    <path
                      fill="#121214"
                      fill-rule="evenodd"
                      d="M21 6.73a7.3 7.3 0 0 1-2.125.583A3.678 3.678 0 0 0 20.5 5.27c-.708.417-1.5.729-2.333.896A3.777 3.777 0 0 0 15.458 5a3.681 3.681 0 0 0-3.687 3.688c0 .291.02.583.083.854-3.062-.167-5.77-1.563-7.604-3.792-.313.542-.5 1.104-.5 1.792 0 1.27.646 2.396 1.646 3.062a3.757 3.757 0 0 1-1.667-.458v.041a3.69 3.69 0 0 0 2.959 3.626 3.82 3.82 0 0 1-1.667.062 3.68 3.68 0 0 0 3.437 2.563c-1.25 1-2.854 1.75-4.583 1.75-.292 0-.583-.021-.875-.063 1.625 1.042 3.583 1.5 5.667 1.5 6.791 0 10.5-5.625 10.5-10.5v-.48A7.648 7.648 0 0 0 21 6.73Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/turo/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="seo-pages-0"
                    role="img"
                    version="1.1"
                  >
                    <path
                      fill="#121214"
                      fill-rule="evenodd"
                      d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.419A4.411 4.411 0 0 0 4.51 4.51c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.594.5.5 1.002.808 1.594 1.038.572.223 1.226.375 2.184.419.96.044 1.267.054 3.71.054 2.445 0 2.752-.01 3.712-.054.958-.044 1.612-.196 2.184-.419a4.41 4.41 0 0 0 1.594-1.038c.5-.5.808-1.002 1.038-1.594.223-.572.375-1.226.419-2.184.043-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.411 4.411 0 0 0 19.49 4.51a4.41 4.41 0 0 0-1.594-1.038c-.572-.223-1.226-.375-2.184-.419C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.42.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67a2.79 2.79 0 0 1-.673 1.036c-.315.315-.615.51-1.035.673-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.788 2.788 0 0 1-1.035-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Zm-.017 10.356a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.243 4.622 4.622 0 0 0 0-9.243Zm5.171-.025a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="http://www.youtube.com/turo">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="seo-pages-0"
                    role="img"
                    version="1.1"
                  >
                    <path
                      fill="#121214"
                      fill-rule="evenodd"
                      d="M22.54 6.842a2.721 2.721 0 0 0-1.945-1.894C18.875 4.5 12 4.5 12 4.5s-6.875 0-8.595.448c-.95.25-1.692.972-1.945 1.894C1 8.514 1 12 1 12s0 3.486.46 5.158a2.721 2.721 0 0 0 1.945 1.894C5.125 19.5 12 19.5 12 19.5s6.875 0 8.595-.448a2.721 2.721 0 0 0 1.945-1.894C23 15.486 23 12 23 12s0-3.486-.46-5.158ZM9.75 15.166V8.834L15.5 12l-5.75 3.166Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                {" "}
                <a href="https://turo.com/blog/canada/" id="blog">
                  {" "}
                  BLOG{" "}
                </a>
              </li>
            </ol>
          </div>

          <div className="store">
            <ol>
              <li>
                <a href="https://itunes.apple.com/app/relayrides/id555063314?mt=8&ls=1">
                  <img src={playstore} loading="lazy" alt="playstore" />
                </a>
              </li>
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.relayrides.android.relayrides">
                  <img src={appstore} alt="appstore" />
                </a>
              </li>
            </ol>
          </div>

          <div className="language">
            <svg
              class="seo-pages-0"
              data-testid="IconCanada"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.7 22.7c1.6.8 3.4 1.3 5.3 1.3s3.7-.5 5.3-1.3V1.3C15.7.5 13.9 0 12 0S8.3.5 6.7 1.3v21.4z"
                fill="#fff"
              ></path>
              <path
                d="M6.7 1.3C2.7 3.2 0 7.3 0 12c0 4.7 2.7 8.8 6.7 10.7V1.3zm10.6 0v21.5c3.9-2 6.7-6 6.7-10.7 0-4.8-2.7-8.9-6.7-10.8zM15.8 11l-.5 1 .4.1c.1.1.1.2.1.3 0 .1 0 .2-.1.3L14.4 14h-1.6l-.3 1.5c0 .1-.1.1-.1.1h-.5c-.1 0-.1-.1-.1-.1l-.3-1.5H9.9l-1.3-1.3c-.1-.1-.1-.2-.1-.3 0-.1 0-.2.1-.3l.2-.2-.5-1v-.1h.1l1 .5.2-.2c.1-.1.4-.1.8.1.067.067.133.044.2.022a.322.322 0 0 1 .1-.022s.1-.2.1-.3l-.3-1.5v-.1h.1l1 .5.5-1.5c0-.1.1-.1.1 0l.5 1.5 1-.5h.1v.1l-.3 1.5c-.1.1 0 .3.1.3.1.1.2.1.3 0 .2-.2.4-.2.6 0l.2.2 1-.5h.1v.1z"
                fill="#FF3131"
              ></path>
            </svg>
            <p>English</p>
          </div>
        </div>

        <div className="d-head-content">
          <div className="d-1" id="d">
            <div className="dtturo" id="df">
              <div className="dthead" id="head">
                <p>Turo</p>
                <button onClick={() => toggleDrop("d1")}>
                  <img src={drop.d1 ? up : down} alt="upar-niche" />{" "}
                </button>
              </div>
              {drop.d1 && (
                <div className="dtdrop" id="drop">
                  <ol>
                    <li>About</li>
                    <li>Team</li>
                    <li>Policies</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>OpenRoad</li>
                    <li>Turo shop</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          <div className="d-2" id="d">
            <div className="dlloca" id="df">
              <div className="dlhead" id="head">
                <p>Locations</p>
                <button onClick={() => toggleDrop("d2")}>
                  <img src={drop.d2 ? up : down} alt="upar-niche" />
                </button>
              </div>
              {drop.d2 && (
                <div className="dldrop" id="drop">
                  <ol>
                    <li>USA (EN)</li>
                    <li>Australia (EN)</li>
                    <li>Canada (EN)</li>
                    <li>Canada (FR)</li>
                    <li>France (FR)</li>
                    <li>UK (EN)</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          <div className="d-3" id="d">
            <div className="deexplore" id="df">
              <div className="dehead" id="head">
                <p>Explore</p>
                <button onClick={() => toggleDrop("d3")}>
                  <img src={drop.d3 ? up : down} alt="upar-niche" />
                </button>
              </div>
              {drop.d3 && (
                <div className="dedrop" id="drop">
                  <ol>
                    <li>Book a car</li>
                    <li>Weddings</li>
                    <li>Trust & safety</li>
                    <li>Get help</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          <div className="d-4" id="d">
            <div className="dhhosting" id="df">
              <div className="dhhead" id="head">
                <p>Hosting</p>
                <button onClick={() => toggleDrop("d4")}>
                  <img src={drop.d4 ? up : down} alt="upar-niche" />
                </button>
              </div>
              {drop.d4 && (
                <div className="dhdrop" id="drop">
                  <ol>
                    <li>List your car</li>
                    <li>Carculator</li>
                    <li>All-Star Hosts</li>
                    <li>Host tools</li>
                    <li>Insurance & protection</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          <div className="d-5" id="d">
            <div className="dvtypes" id="df">
              <div className="dvhead" id="head">
                <p>Vehicle types</p>
                <button onClick={() => toggleDrop("d5")}>
                  <img src={drop.d5 ? up : down} alt="upar-niche" />
                </button>
              </div>
              {drop.d5 && (
                <div className="dvdrop" id="drop">
                  <ol>
                    <li>Cars</li>
                    <li>Vans</li>
                    <li>Trucks</li>
                    <li>Exotic & Luxury</li>
                    <li>Sport</li>
                    <li>Classics</li>
                    <li>Convertibles</li>
                    <li>Electric Vehicles</li>
                    <li>SUVs</li>
                    <li>Minivans</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          <div className="d-6" id="d">
            <div className="dmmake" id="df">
              <div className="dmmake" id="head">
                <p>Makes</p>
                <button onClick={() => toggleDrop("d6")}>
                  <img src={drop.d6 ? up : down} alt="upar-niche" />
                </button>
              </div>
              {drop.d6 && (
                <div className="dtdrop" id="drop">
                  <ol>
                    <li>Tesla</li>
                    <li>Toyota</li>
                    <li>BMW</li>
                    <li>Jeep</li>
                    <li>Nissan</li>
                    <li>Chevrolet</li>
                    <li>Ford</li>
                    <li>GMC</li>
                    <li>Mercedes-Benz</li>
                    <li>Ferrari</li>
                  </ol>
                </div>
              )}
            </div>
          </div>

          <div className="d-7" id="d">
            <div className="dccities" id="df">
              <div className="dchead" id="head">
                <p>Cities</p>
                <button onClick={() => toggleDrop("d7")}>
                  <img src={drop.d7 ? up : down} alt="upar-niche" />
                </button>
              </div>
              {drop.d7 && (
                <div className="dcdrop" id="drop">
                  <ol>
                    <li>Banff</li>
                    <li>Calgary</li>
                    <li>Charlotte Town</li>
                    <li>Edmonton</li>
                    <li>Fredericton</li>
                    <li>Halifax</li>
                    <li>Jasper</li>
                    <li>Kelowna</li>
                    <li>Moncton</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
