// src/components/ProductRow.js

import React from 'react';


const ProductRow = ({ product }) => {
  const { name, price, category, inStock } = product;

  return (
    <tr style={{ color: inStock ? 'inherit' : 'red' }}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{category}</td>
    </tr>
  );
};

export default ProductRow;