import React, { useState } from 'react';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import uuid from 'react-uuid'
// Вставьте первую константу в первый абзац, а вторую константу - во второй.
// function App() {
// 	const str1 = 'text1';
// 	const str2 = 'text2';
	
// 	return <div>
// 		<p>{str1}</p>
// 		<p>{str2}</p>
// 	</div>;
// }
// Вставьте константу с именем вместо первого знака ?, а константу с возрастом - вместо второго.
// function App() {
// 	const name = 'user';
// 	const age  = '30';
	
// 	return <div>
// 		name: {name}
//     <br/>
// 		age:  {age}
// 	</div>;
// }
// -----------------задача 5-------------------------------
// function App() {
// 	const arr = [1, 2, 3, 4, 5];
// }
// Сделайте так, чтобы результатом рендеринга был тег ul, в тегах li которого будут стоять элементы массива.
// -----------------задача 5-------------------------------
// function App() {
// 	const arr = [1, 2, 3, 4, 5];
//   return (
//     <ul>
//     <li>{arr[0]}</li>
//     <li>{arr[1]}</li>
//     <li>{arr[2]}</li>
//     <li>{arr[3]}</li>
//     <li>{arr[4]}</li>
//   </ul>
//   )
// }
// -----------------задача 6 -------------------------------
// function App() {
// 	const obj = {name: 'john', surname: 'smit'};
// }
// Сделайте так, чтобы результатом рендеринга был следующий код:

// <p>
// 	name:    <span>john</span>, <br>
// 	surname: <span>smit</span>,
// </p>
// -----------------задача 6 -------------------------------
// function App() {
// 	const obj = {name: 'john', surname: 'smit'};
//   return (
//     <p>
//     name: <span>{obj.name}</span>, <br/>
//     surname: <span>{obj.surname}</span>
//     </p>
//   )
// }
// -----------------задача 7 -------------------------------
// function App() {
// 	const li1 = <li>text1</li>;
// 	const li2 = <li>text2</li>;
// 	const li3 = <li>text3</li>;
// }
// Сделайте так, чтобы результатом рендеринга было следующее:

// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li>text3</li>
// </ul>
// -----------------задача 7 -------------------------------
// function App() {
// 	const li1 = <li>text1</li>;
// 	const li2 = <li>text2</li>;
// 	const li3 = <li>text3</li>;
//   return <ul>{li1} {li2} {li3}</ul>
// }
// -----------------задача 8 -------------------------------
// Автор следующего кода хотел записать в константу несколько тегов li и вставить их в ul:

// function App() {
// 	const items = <li>text1</li><li>text2</li><li>text3</li>;
	
// 	return <ul>
// 		{items}
// 	</ul>
// }
// Код, однако, не работает. Исправьте ошибку автора кода.
// -----------------задача 8 -------------------------------
// function App() {
// 	const items = 
//     <>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </>;
	
// 	return <ul>
// 		{items}
// 	</ul>
// }
// -----------------задача 9 -------------------------------
// Вставьте значение константы attr в атрибут id нашего дива.
// -----------------задача 9 -------------------------------
// function App() {
// 	const attr = 'block';
	
// 	return <div id={attr}>
// 		text
// 	</div>;
// }
// -----------------задача 10 -------------------------------
// function App() {
// 	const str1 = 'label';
// 	const str2 = 'block';
// 	const str3 = 'elem';
	
// 	return <div>
// 		<label id={str1} for={str2} class={str3}>text</label> <br>
// 		<input id={str2}>
// 	</div>;
// }
// Код не работает. Исправьте ошибки автора кода.
// -----------------задача 10 -------------------------------
// function App() {
// 	const str1 = 'label';
// 	const str2 = 'block';
// 	const str3 = 'elem';
	
// 	return <div>
// 		<label id={str1} htmlFor={str2} className={str3}>text</label> <br/>
// 		<input id={str2}/>
// 	</div>;
// }
// -----------------задача 11 -------------------------------
// Пусть в константе isAdult содержится true, если пользователю уже есть 18 лет, и false, если нет:
// Сделайте так, чтобы в зависимости от значения isAdult на экране показался или один абзац с текстом, или другой.
// -----------------задача 11 -------------------------------
// function App() {
// 	const isAdult = false;
// 	if (isAdult) return <p>Пользователю 18 и более лет</p>
//   else return <p>Пользователю менее 18 лет!</p>
// }
// -----------------задача 12 -------------------------------
// Пусть в константе isAdmin содержится true, если пользователь админ, и false, если нет:
// Сделайте так, чтобы, если isAdmin имеет значение true, на экране показался див с абзацами. В противном случае ничего показывать не нужно.
// -----------------задача 12 -------------------------------
// function App() {
// 	const isAdmin = false;
// 	if (isAdmin) return (
//   <div>
//     <p>Пользователь является администратором</p>
//   </div>
//     )
// }
// -----------------задача 13 -------------------------------
// Если в age записано больше 18 лет, то в тексте тега div покажите пользователю абзац с одним текстом, а если меньше - то с другим.
// -----------------задача 13 -------------------------------
// function App() {
// 	const age = 19;
	
// 	return <div>
// 	{age > 18 ? 'Больше 18': 'Меньше 18'}
// 	</div>;
// }
// -----------------задача 14 -------------------------------
// function App() {
// 	const isAuth = true;
	
// 	return <div>
// 		<p>вы авторизованы</p>
// 	</div>;
// }
// Сделайте так, чтобы приведенный абзац с текстом показывался только если в isAuth записано true.
// -----------------задача 14 -------------------------------
// function App() {
// 	const isAuth = false;
	
// 	return <div>
// 		{isAuth && <p>вы авторизованы</p>}
// 	</div>;
// }
// -----------------задача 15 -------------------------------
// function App() {
// 	const isAuth = false;
	
// 	return <div>
// 		<p>пожалуйста, авторизуйтесь</p>
// 	</div>;
// }
// Сделайте так, чтобы приведенный абзац с текстом показывался только если в isAuth записано false.
// -----------------задача 15 -------------------------------
// function App() {
// 	const isAuth = false;
	
// 	return <div>
// 		{!isAuth && <p>пожалуйста, авторизуйтесь</p>}
// 	</div>;
// }
// -----------------задача 16 -------------------------------
// Сделайте функцию getDigitsSum, которая будет находить сумму цифр переданного числа. С ее помощью выведите на экран сумму цифр числа 123.
// -----------------задача 16 -------------------------------
//перевод в строку и обработно
// function App() {
//   let number = 22;
//   let sum = 0;
//   function getDigitsSum(number) {
//     let num = String(number);
//     for(let i = 0; i < num.length; i++) {
//       sum = sum + Number(num[i]);
//     }
//     return sum;
//   }

//   return <>
//   <p>Сумма цифр числа {number} равна {getDigitsSum(number)}</p>
//   </>
// }
// -----------------задача 17 -------------------------------
// Сделайте так, чтобы по клику на первую кнопку срабатывала первая функция, а по клику на вторую кнопку - вторая функция.
// -----------------задача 17 -------------------------------
// function App() {
// 	function show1() {
// 		alert(1);
// 	}
	
// 	function show2() {
// 		alert(2);
// 	}
	
// 	return <div>
// 		<button onClick={show1}>act1</button>
// 		<button onClick={show2}>act2</button>
// 	</div>;
// }
// -----------------задача 18 -------------------------------
// Сделайте так, чтобы по клику на первую кнопку алертом выводилось число 1, по клику на вторую кнопку - число 2, а по клику на третью - число 3.
// -----------------задача 18 -------------------------------
// function App() {
//   	function showMessage(message) {
// 		alert(message);
// 	}
// 	return <div>
// 		<button onClick={ () => {showMessage(1)}}>act1</button>
// 		<button onClick={ () => {showMessage(2)}}>act2</button>
// 		<button onClick={ () => {showMessage(3)}}>act3</button>
// 	</div>;
// }
// -----------------задача 19 -------------------------------
// 1) Дана кнопка. По клику на нее получите объект Event и выведите его в консоль.
// 2) Дана кнопка. По клику на нее получите выведите в консоль event.target клика.
// -----------------задача 19 -------------------------------
// function App() {
//   return <>
//   <button onClick={(evt) => {console.log(evt)}}>Event</button>
//   <button onClick={(evt) => {console.log(evt.target)}}>Event target</button>
//   </>
// }
// -----------------задача 20 -------------------------------
// Как работает этот код? Переделайте приведенный код так, чтобы функция принимала два параметра.
// -----------------задача 20 -------------------------------
// function App() {
// 	function func(event, arg, arg2) {
// 		console.log(event, arg, arg2);
// 	}
	
// 	return <div>
// 		<button onClick={event => func(event, 'eee', 'fdfdfd')}>act</button>
// 	</div>;
// }
// -----------------задача 21 -------------------------------
// function App() {
// 	const arr = [];
	
// 	for (let i = 0; i <= 4; i++) {
// 		arr.push(<li>{i+1}</li>);
// 	}
	
// 	return <ul>
// 		{arr}
// 	</ul>;
// -----------------задача 22 -------------------------------
// function App() {
// 	const arr = ['a', 'b', 'c', 'd', 'e'];
// }
// С помощью этого массива сформируйте следующий код:

// <ul>
// 	<li>a</li>
// 	<li>b</li>
// 	<li>c</li>
// 	<li>d</li>
// 	<li>e</li>
// </ul>
// -----------------задача 22 -------------------------------
// function App() {
// 	const arr = ['a', 'b', 'c', 'd', 'e'];
//   return <ul>
//     {arr.map(function (item, index) {
//       return <li key={index}>{item}</li>
//     })}
//   </ul>
// }
// -----------------задача 23 -------------------------------
// В компоненте App дан следующий массив:

// const users = [
// 	{name: 'user1', surn: 'surn1', age: 30},
// 	{name: 'user2', surn: 'surn2', age: 31},
// 	{name: 'user3', surn: 'surn3', age: 32},
// ];
// Выведите элементы этого массива в виде списка ul.
// -----------------задача 23 -------------------------------
// function App() {
//   const users = [
// 	  {id: 1234444, name: 'user1', surn: 'surn1', age: 30},
// 	  {id: 1234445, name: 'user2', surn: 'surn2', age: 31},
// 	  {id: 1234446, name: 'user3', surn: 'surn3', age: 32},
//   ];
//   return <ul>
//     {users.map((item) => {
//       return <li key={item.id}>{item.name} {item.surn} {item.age}</li>
//     })}
//   </ul>
// }
// -----------------задача 24 -------------------------------
// В компоненте App дан следующий массив:

// const users = [
// 	{id: 1, name: 'user1', surn: 'surn1', age: 30},
// 	{id: 2, name: 'user2', surn: 'surn2', age: 31},
// 	{id: 3, name: 'user3', surn: 'surn3', age: 32},
// ];
// Выведите элементы этого массива в виде таблицы table так, чтобы каждое поле объекта попало в свой тег td. Сделайте заголовки колонок вашей таблицы.
// +генерация айди через библиотеки
// -----------------задача 24 -------------------------------
// function App() {
//   function generateId() {
//     return uuid();
//   }
//   const users = [
// 	{id: generateId(), name: 'user1', surn: 'surn1', age: 30},
// 	{id: generateId(), name: 'user2', surn: 'surn2', age: 31},
// 	{id: generateId(), name: 'user3', surn: 'surn3', age: 32},
//   ];
//   return <table>
//     <tr>
//       <td>Айди</td>
//       <td>Имя</td>
//       <td>Фио</td>
//       <td>Возраст</td>
//     </tr>
//     {users.map((item) => {
//       return <tr key={item.id}>
//         <td>{item.id}</td>
//         <td>{item.name}</td>
//         <td>{item.surn}</td>
//         <td>{item.age}</td>
//       </tr>
//     })}
//   </table>
// }
// -----------------задача 25 -------------------------------
// function App() {
//   const [name, setName] = useState('Хлебушек');
//   const [cost, setCost] = useState('50рэ');
//   function clickHandler() {
//     setName('Батон');
//   }
//   function clickHandler2() {
//     setCost('45рэ');
//   }
//   return <div>
// 		<p>{name}</p>
//     <button onClick={clickHandler}>Меняем на батон!</button><br/>
//     <button onClick={clickHandler2}>Скок стоит батон?!</button>
//     <p>{cost}</p>
// 	</div>;
// }
// -----------------задача 26 -------------------------------
// function App() {
// 	let [inCart, setInCart] = useState(false);
	
// 	return <div>
// 		<span>{inCart ? 'в корзине' : 'не в корзине'}</span>
// 		<button onClick={() => setInCart(!inCart)}>жмяк</button>
// 	</div>;
// }
// -----------------задача 27 -------------------------------
// Давайте сделаем счетчик кликов по кнопке:
function App() {
	let [count, setCount] = useState(0);
	
	function counter() {
		setCount(count + 1);
	}
	
	return <div>
		<span>{count}</span>
		<button onClick={counter}>+</button>
	</div>;
}
export default App;