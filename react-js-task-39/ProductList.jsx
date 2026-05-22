import React, { useState } from "react";
import "./ProductList.css";

const productsData = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mobile" },
  { id: 3, name: "Headphones" },
  { id: 4, name: "Keyboard" },
];

function ProductList() {
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  // Filter products
  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Product List</h2>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Conditional Rendering */}
      {filteredProducts.length > 0 ? (
        <ul className="product-list">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              className={
                hoveredId === product.id
                  ? "product-item active"
                  : "product-item"
              }
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductList;