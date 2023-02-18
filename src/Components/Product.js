import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import productsFile from "../data-files/products.json";
import ProductItem from "./ProductItem";
import {IoMdCheckbox} from "react-icons/io"

const Product = () => {
  const { categoryID } = useParams();
  const productsArray = [];
  const filteredArray = [];
  const [isChecked, setIsChecked] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsFile);
  }, []);

  const selectedProductsArray = (productsArr) => {
    productsArr.forEach((product) => {
      if (product.categoryId === categoryID) {
        productsArray.push(product);
      }
    });
  };

  const onCheck = () => {
    setIsChecked((p) => !p);
  };

  const filteredProductsArray = (productsArr) => {
    productsArr.forEach((product) => {
      if (product.delivery) {
        filteredArray.push(product);
      }
    });
  };

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {selectedProductsArray(products)}
        {!isChecked &&
          productsArray.length > 0 &&
          productsArray.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              isChecked={isChecked}
            />
          ))}

        {isChecked && filteredProductsArray(productsArray)}
        {filteredArray.length > 0 &&
          filteredArray.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </div>

      <div className="check-box text-center m-2 p-2 text-xl items-center">
        <IoMdCheckbox onChange={onCheck} checked={isChecked} />
          {' '}
          Delivery
      </div>
    </div>
  );
};

export default Product;
