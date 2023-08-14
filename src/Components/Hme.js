import React from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";

const Hme = (props) => {
  return (
    <>
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
           {props.name}
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={props.image} alt="path not correct" />
        </div>
      </div>
    </div>
      </>
  )
}

export default Hme;
