import { useState } from "react";
import ProfilePic from "../Assets/uyg.jpg";

import { AiFillStar } from "react-icons/ai";
const Testimonials = () => {

  
  const [myStyle, setmyStyle] = useState( {
    color: 'black',
    backgroundColor: 'white'
  });
  const [btnText, setbtnText] = useState('Enable Dark Mode')
  
   const toggelColor = () => {
    if(myStyle.color == 'black') {
      setmyStyle({
        color: 'white',
  backgroundColor: 'black'
      });
      setbtnText('Enable Light Mode')
    }
      else{
        setmyStyle({
          color: 'black',
    backgroundColor: 'white'
        });

        setbtnText('Enable Dark Mode')
      }
   }
  
  

  return (
    <div className="work-section-wrapper">
    <div className="work-section-top">
      <p className="primary-subheading">Testimonial</p>
      <h1 className="primary-heading">What They Are Saying</h1>
      <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
    </div>
    <div className="testimonial-section-bottom" style={myStyle}>
      <img src={ProfilePic} alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
      <div className="testimonials-stars-container">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <h2>K KUMAR</h2>
    <button className="secondary-button" onClick={toggelColor}>{btnText}</button>
    </div>
  </div>
  );
};

export default Testimonials
