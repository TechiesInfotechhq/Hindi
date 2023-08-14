import React from "react";
import Hme from "./Hme";
import About from "./About";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Pic from "../Assets/home-banner-image.png";
import Delivery from "./Delivery";
const Home = () => {
   
  const bindu = {
    name:'Your Favourite Food Delivered Hot & Fresh',
    image:Pic,
  };
  return (
    <>
<Hme {...bindu}/>
    <About/>
    <Work/>
    <Testimonials/>
    <div className="space">
    <Delivery/>
    </div>
    </>
  );
};

export default Home;