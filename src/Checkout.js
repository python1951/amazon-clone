import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import SubTotal from "./SubTotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className='checkout'>
      <img
        className='checkout__ad'
        src='https://tse4.mm.bing.net/th?id=OIP.xl8HOSpG_Owu7ys61Fg64gHaCr&pid=Api&P=0&w=463&h=169'
        alt='add_amazon'
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is Empty</h2>
        </div>
      ) : (
        <div>
          <h1>
            Your Shopping Cart
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </h1>
          
        </div>
      )}
      {basket.length > 0 && (
    <div className="checkout__right">
      <SubTotal />
    </div>
  )}
    </div>
     
     
  );
  
}

export default Checkout;
