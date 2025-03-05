// import React from "react";
import "./ProductList.css"; 
const ProductList = ({ products, isGrid }) => {
	return (
		<div className={isGrid ? "grid-container" : "list-container"}>
			{products.map((product) => (
				<div key={product.id} className="product-card">
					<h3>{product.title}</h3>
					<p>{product.description}</p>
					<p>Price: ${product.price}</p>
				</div>
			))}
		</div>
	);
};

export default ProductList;
