import React from "react";
import {
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = () => {
  return (
    <ul className="social-links">
      <li className="social-link">
        <a href="#">
          <FaFacebookF />
        </a>
      </li>
      <li className="social-link">
        <a href="#">
          <FaInstagram />
        </a>
      </li>
      <li className="social-link">
        <a href="#">
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-link">
        <a href="#">
          <FaTwitter />
        </a>
      </li>
      <li className="social-link">
        <a href="#">
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default socialLinks;
