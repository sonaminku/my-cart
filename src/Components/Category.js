import React, { useState, useEffect } from "react";
import CategoryType from "./CategoryType";
import categoryFile from '../data-files/categories.json'

const Category = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    setCategory(categoryFile)
  }, [])

  return (
    <div className="mt-28 mb-28">
      <div className="container">
      {category.map(category => (
        <CategoryType category={category} key={category.id} />
      ))}
      </div>
    </div>
  );
};

export default Category;
