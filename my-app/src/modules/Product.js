import React from 'react';
function Product(props) {
  const {name, cost, id, inCart, addToCart} = props;
	return <p>
		Наименование: {name}, цена: {cost}
    <span>{inCart ? 'Товар в корзине' : 'Товар не в корзине'}</span>
		<button onClick={() => addToCart(id)}>Добавить в корзину</button>
	</p>;
}

export default Product;