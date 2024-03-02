import React from "react";
// import './styles/Footer.scss';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="">
      <div>
        <h1>
          <span>UI</span>Proj
        </h1>
        <p>©All Rights Reserved 2023</p>
      </div>

      <div>
        <h5>Follow Us On</h5>
        <div>
          <a href="https://github.com/Pankaj9769">
            <AiFillInstagram style={{ color: "#bc2a8d" }} />
          </a>
          <a href="https://github.com/Pankaj9769">
            <AiFillFacebook style={{ color: "#316FF6" }} />
          </a>
          <a href="https://github.com/Pankaj9769">
            <AiFillLinkedin style={{ color: "#0077b5 " }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
