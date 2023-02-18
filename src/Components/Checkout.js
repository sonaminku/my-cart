import React from "react";
import { useCart } from "../context/context";
import ItemInCart from "./ItemInCart";

const Checkout = () => {

  const [addedToCart, dispatch] = useCart();

  const cartTotal = addedToCart.reduce(
    (currentTotal, item) => currentTotal + item.price * item.qty,
    0
  );

  const deleteItem = item => {
    dispatch({
      type: 'DELETE_FROM_CART',
      item,
    });
  };

  return (
    <>
      <div>
        {addedToCart.map(item => (
          <ItemInCart item={item} key={item.id} deleteItem={deleteItem} />
          ))}
      </div>
      {addedToCart.length === 0 ? (
        <div className="font-bold text-xl text-center">Cart is Empty</div>
      ) : (
        <div className="text-center text-xl">
          <div className="font-bold">Total Cost: {" "}{cartTotal} </div>
          <button className='bg-pink-700 text-white rounded-md p-2 m-2 text-sm'>Pay Now</button>
        </div>
      )
      }  
    </>
  );
};

export default Checkout;
