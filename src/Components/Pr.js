import React from 'react'
import './Product.css';
import { Link } from 'react-router-dom';
const product = ({handleClick}) => {
  

   const list = 
   [
   {
      id:"1",
      img:"https://add-to-cart-javascript.vercel.app/img/men-1.jpg",
      heading:"Oxford Shirts",
      price:"₹ 1200 ",
      
   },
   {
      id:"2",
      img:"https://add-to-cart-javascript.vercel.app/img/watch-3.jpg",
      heading:"Google Pixel",
      price:"₹ 2059",
      
   },
   {
      id:"3",
      img:"https://add-to-cart-javascript.vercel.app/img/watch-4.jpg",
      heading:"titan Power",
      price:"₹ 120 ",
      
   },
   {
      id:"4",
      img:"https://add-to-cart-javascript.vercel.app/img/women-4.jpg",
      heading:"Wrap around",
      price:"₹ 4050 ",
      
   }
]
  return (
    <>
    <main>
    <section>
                <div className="tab_content">

                         <div className="col-lg-3 col-md-6">
                           {
                              list.map((random) =>(
                                 <div className="featured-item">
                                 <div className="featured-item-img">
                                    <a href="#">
                                       <img src={random.img} alt="Images"/>
                                    </a>
                                 </div>
                                 <div className="content">
                                    <h3><a href="#">{random.heading}</a></h3>
                                    <hr />
                                    <div className="content-in">
                                       <h4>{random.price} </h4>
                                       <span>(4.9)<i className="fa fa-star"></i></span>
                                    </div>
                                    <hr />
                                    <div className="featured-content-list">
                                      <button type="button"  data-name="Oxford" data-price="1200" className="default-btn border-radius-5" onClick={()=>handleClick(random)}> Add to cart</button>
                                    </div>
                                 </div>
                              </div>
                          
                                 )
                              )
                           }
                        
                         </div>
                    
                </div>
        
    </section>
 </main>
           </>
  );
}

export default product;
