import React, { createContext, useContext, useEffect, useReducer } from 'react';

const reducer = (
  addedToCart = JSON.parse(localStorage.getItem('addedToCart') || '[]'),
  action
) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const datas = [...addedToCart];
      const data = datas.find(d => d.id === action.id);
      if (data) {
        data.qty += 1;
        //Alert.success('Added To Cart', 2000);
      } else {
        action.product.qty = 1;
        datas.push(action.product);
        //Alert.success('Added To Cart', 2000);
      }
      return datas;
    }

    case 'DELETE_FROM_CART': {
      const deletingProduct = addedToCart.filter(
        deleteThisItem => deleteThisItem.id !== action.item.id
      );
      return deletingProduct;
    }

    case 'DECREASE_QTY': {
      const datas = [...addedToCart];
      const data = datas.find(d => d.id === action.id);
      if (data) {
        if (data.qty === 1) {
          const deletingProduct = addedToCart.filter(
            deleteThisItem => deleteThisItem.id !== action.item.id
          );
          return deletingProduct;
        }
        data.qty -= 1;
      }
      return datas;
    }
    default:
      return addedToCart;
  }
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('addedToCart') || '[]');
  const [addedToCart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('addedToCart', JSON.stringify(addedToCart));
  }, [addedToCart]);

  return (
    <CartContext.Provider value={[addedToCart, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
