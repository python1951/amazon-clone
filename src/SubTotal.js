import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./SubTotal.css"
function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat

value={getBasketTotal(basket)}
decimalScale={2}
thousandSeparator={true}
displayType={"text"}
prefix={"$"}
      renderText={(value)=>(
          <>
          <p>
                        SubTotal ({basket.length} item(s)): <strong>{value}</strong>

          </p>
          <small className="subtotal__gift">
              <input type="checkbox"/> This Order contains a gift
          </small>
          </>

      )}
       
      />

      <button className='subtotal__button'>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
