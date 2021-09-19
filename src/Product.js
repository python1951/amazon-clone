import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className='product'>
      <div className='product__info'>
        <div className='product__title'>{title}</div>
        <div className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_) => (
              <p> ⭐ </p>
            ))}
        </div>
      </div>

      <img src={image} alt='Rendering from the server' />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
