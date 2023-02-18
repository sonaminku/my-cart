import React from "react";
import { useCart } from "../context/context";

const ProductItem = ({ product }) => {
  const {id, name, price, currency, thumbnail, inStock } = product;

  // eslint-disable-next-line no-unused-vars
  const [addedToCart, dispatch]=useCart();
 
 
  const addToCart = () => {
    dispatch({
      type:'ADD_TO_CART',
      id,
      product
    });
  };
    
  return (
    <div className="border-2 m-4 p-4 rounded-xl">
      <img src={thumbnail} alt="" height={250} width={250} className='rounded-3xl' />
      <div className="m-4 px-4">
      <h3 className="font-bold text-xl">{name}</h3>
      <h6>
        <span className="font-bold">Price:</span> {currency} {price}
      </h6>
      {inStock ? (
        <h5 style={{ color: "green" }} className='font-bold text-xl'>In stock</h5>
      ) : (
        <h5 style={{ color: "red" }} className='font-bold text-xl'>Out of Stock</h5>
      )}

      <button onClick={addToCart} disabled={!inStock} className='bg-pink-700 text-white rounded-md p-2 m-2 text-sm'>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
