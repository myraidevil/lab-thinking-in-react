// src/components/ProductsPage.js

import React, { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  const handleSearch = (searchTerm) => {
    const filteredProducts = jsonData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>Root Store</h1>
      <SearchBar handleSearch={handleSearch} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;