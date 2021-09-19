import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import SubTotal from "./SubTotal";
function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removefromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className='checkoutProduct'>
      <div className='checkout__left'>
        <img className='checkoutProduct__image' src={image} alt='' />
        <div className='checkoutProduct__info'>
          <p>
            <p className='checkoutProduct__title'>{title}</p>
            <div className='checkoutProduct__price'>
              <small>$</small>
              <strong>{price}</strong>
            </div>
            <div className='checkoutProduct__rating'>
              {Array(rating)
                .fill()
                .map((_) => (
                  <p> ⭐ </p>
                ))}
            </div>
          </p>
          <button onClick={removefromBasket}>Remove from Basket</button>
        </div>

      </div>

      
     
      
    </div>
    
  );
}

export default CheckoutProduct;
