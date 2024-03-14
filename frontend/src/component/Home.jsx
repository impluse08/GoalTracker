import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowDown } from "react-icons/fi";

const Home = () => {
  return (
    
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Task management, now seamless
          </h1>
          <p className="primary-text">
            A few clicks and you're done! Enjoy an efficient and intuitive experience while managing your team...
          </p>
          <button className="secondary-button">
            Check us out <FiArrowDown />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
    
  );
};

export default Home;
