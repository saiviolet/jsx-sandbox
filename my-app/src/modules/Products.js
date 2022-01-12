import React, {useState} from 'react';
import uuid from 'react-uuid';
import Product from './Product';
function Products() {
	const initProds = [
		{id: uuid(), name: 'product1', cost: 100, inCart: false},
		{id: uuid(), name: 'product2', cost: 200, inCart: false},
		{id: uuid(), name: 'product3', cost: 300, inCart: false},
	];

	const [prods, setProds] = useState(initProds);
	const listProd = prods.map(item => <Product 
		key={item.id} 
		name={item.name} 
		cost={item.cost}
		id={item.id}
		inCart={item.inCart}
		addToCart={addToCart}
		/>)

	function addToCart(id) {
		setProds(prods.map(item => {
			if (item.id === id) item.inCart = true;
			return item;
		}))
	}

	return <>
	{listProd}
	</>
}
export default Products;