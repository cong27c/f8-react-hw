import React, { useState } from "react";
import ProductList from "./components/ProductList";
import data from "./data";



function App() {
  const [isGrid, setIsGrid] = useState(true)
  return (
    <>
      <header>
        <h1>Product Store</h1>
        <button onClick={() => setIsGrid(!isGrid)}>
            Toggle products list
        </button>
        <header>
        {Array.isArray(data) && data.length > 0 ? (
          <ProductList products={data} isGrid={isGrid} />
        ) : (
          <p>No products available.</p>
        )}
        <footer>
          <p>...</p>
        </footer>
        </header>
      </header>
    </>
  )
}

export default App