import React from 'react'
import { useCart} from '../context/context'

const ItemInCart = ({item, deleteItem}) => {
  const {id, name, price, currency, thumbnail} = item

  const [addedToCart, dispatch] = useCart();

  const data = addedToCart.find(d => d.id === id);
  const { qty } = data;

    const increaseQty = () => {
      dispatch({
        type: 'ADD_TO_CART',
        id,
      });
    };
  
    const decreaseQty = () => {
      dispatch({
        type: 'DECREASE_QTY',
        id,
        item
      });
    };

  return (
    <div className='flex flex-row'>
      <div className="border-2 m-4 p-4 rounded-xl">
        <img src={thumbnail} alt="" height={250} width={250} className='rounded-3xl' />
      </div>
      <div className="m-4 p-4 rounded-xl">
        <h5 className='font-bold text-xl'>{name}</h5>
        <h6>
        <span className="font-bold">Price:</span> {currency} {price}
      </h6>
      <button onClick={decreaseQty} className='bg-pink-700 text-white rounded-md p-2 m-2 text-sm'>-</button>
      <span>{qty}</span>
      <button onClick={increaseQty} className='bg-pink-700 text-white rounded-md p-2 m-2 text-sm'>+</button>
      <button onClick={() => deleteItem(item)} className='bg-pink-700 text-white rounded-md p-2 m-2 text-sm'>Remove Item</button>
      </div>
    </div>
  )
}

export default ItemInCart
