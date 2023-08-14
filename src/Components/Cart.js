import React, {useState} from 'react'
import './Cart.js'
const Cart = ({cart, setCart}) => {
  const [price, setPrice] = useState(0);
  return (
 <article>
  {
    cart?.map((item)=>{
      <div className="cart_box">
        <div className="cart-img">
          <img src={item.img} alt="" />
          <p>{item.title}</p>
        </div>
        <div>
          <button> + </button>
          <button> - </button>
        </div>
        <div>
          <span>{item.price}</span>
          <button>Remove</button>
        </div>
      </div>
    })}
<div>
  <span>Total Price of your cart</span>
  <span>Rs = {price}</span>
</div>

 </article>
  )
}

export default Cart
