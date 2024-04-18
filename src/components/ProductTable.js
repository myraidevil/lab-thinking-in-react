
import React from 'react';
import ProductRow from './ProductRow';



const ProductTable = ({ products }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <ProductRow key={index} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;