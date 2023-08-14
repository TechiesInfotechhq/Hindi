import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Delivery from "./Components/Delivery";
import Pr from "./Components/Pr";
import Cart from "./Components/Cart";
import { useState } from "react";
function App() { 

  const [show, setShow] = useState(true);
   const [cart, setCart] = useState([]); 
const [warning, setWarning] = useState(false);
  const handleClick  = (random)=>{
   let isPresent = false;
   cart.forEach((product) => {
   if(random.id === product.id)
    isPresent = true;
})
if(isPresent){
setWarning(true);
setTimeout(()=>{
  setWarning(false)
}, 2000);
return ; 
  }
setCart([...cart, random]);
 }

   return (
    <BrowserRouter>
    <div className="App">
      <Navbar size={cart.length} setShow={setShow} />
      <Routes>
<Route path="/"  element={<Home />}/>
<Route path="about" element={<About />}/>
<Route path="work" element={ <Work />}/>
<Route path="dlivery" element={<Delivery />}/>
<Route path="test" element={<Testimonials />}/>
<Route path="pr"  element={<Pr handleClick={handleClick} />}/>
<Route path="contact" element={ <Contact />}/>
<Route path="cart" element={ <Cart cart={cart} setCart={setCart} />}/>
      </Routes>
      {
        show ? <Pr handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} />
      }
{
  warning && <div className="warning" >Item is already added your cart</div>
}
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App;