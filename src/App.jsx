import React, { useState } from "react";
import ProductList from "./components/ProductList";
import data from "./data";
import Header from "./layouts/Header";





function App() {
  const [isGrid, setIsGrid] = useState(true)
  return (
    <>
    <Header/>
        <button onClick={() => setIsGrid(!isGrid)}>
            Toggle products list
        </button>
        {
          <ProductList products={data} isGrid={isGrid} />
        }
    </>
  )
}

export default App