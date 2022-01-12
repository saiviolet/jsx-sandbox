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
// function App() {
// 	let [count, setCount] = useState(0);
	
// 	function counter() {
// 		setCount(count + 1);
// 	}
	
// 	return <div>
// 		<span>{count}</span>
// 		<button onClick={counter}>+</button>
// 	</div>;
// }
// -----------------задача 28 -------------------------------
// Пусть вы хотите отображать на экране данные юзера: его имя, фамилию, возраст. Сделайте для этого соответствующие стейты с начальными значениями.
// Сделайте кнопки для изменения имени и фамилии.
// -----------------задача 28 -------------------------------
// function App() {
//   let [name, setName] = useState('Имя пользователя');
//   let [surname, setSurname] = useState('Фамилия пользователя');
//   let [age, setAge] = useState('18');
//   return <div>
//     <div>
//       <p>{name}</p><button onClick={() => {setName('Карабас')}}>Изменить имя</button>
//       <p>{surname}</p><button onClick={() => {setSurname('Барабас')}}>Изменить фамилию</button>
//       <p>{age}</p><button onClick={() => {setAge('10000')}}>Изменить возраст</button>
//     </div>
//   </div>
// }
// -----------------задача 29 -------------------------------
// 1.Добавьте еще один стейт, который будет показывать, забанен пользователь или нет. Выведите информацию об этом в каком-нибудь теге.
// Сделайте кнопку, нажатие на которую будет банить пользователя и кнопку, нажатие на которую будет разбанивать пользователя.
// 2.Модифицируйте предыдущую задачу так, чтобы из двух кнопок всегда была видна только соответствующая. 
// 3.То есть, если пользователь забанен, то видна кнопка для разбанивания, а если не забанен - для забанивания.
// 4.Сделайте еще две кнопки. Пусть первая кнопка увеличивает возраст на единицу, а вторая - уменьшает его.
// -----------------задача 29 -------------------------------
// function App() {
//   let [name, setName] = useState('Имя пользователя');
//   let [surname, setSurname] = useState('Фамилия пользователя');
//   let [age, setAge] = useState(18);
//   let [isBan, setBan] = useState(true);
//   return <div>
//     <div>
//       <p>{name}</p>
//       <button onClick={() => {setName('Карабас')}}>Изменить имя</button>
//       <p>{surname}</p>
//       <button onClick={() => {setSurname('Барабас')}}>Изменить фамилию</button>
//       <p>{age}</p>
//       <button onClick={() => {setAge(age + 1)}}>Добавить годок</button>
//       <button onClick={() => {setAge(age - 1)}}>Удалить годок</button>
//       <p>{isBan ? 'Пользователь забанен' : 'Пользователь не забанен'}</p>
//       {isBan ? <button onClick={() => {setBan(!isBan)}}>Снять бан</button> : <button onClick={() => {setBan(!isBan)}}>Забанить</button>}
//     </div>
//   </div>
// }
// ----------------- задача 30 -------------------------------
// организовать работу инпута
// Сделайте два инпута. Пусть текст первого инпута выводится в первый абзац, а текст второго инпута - во второй абзац.
// ----------------- задача 30 -------------------------------
// function App() {
//   //стейт для значения инпута
// 	const [value1, setValue1] = useState('');
//   const [value2, setValue2] = useState('');
// 	//инпут
// 	return <div>
//     <p>Значение первого инпута:{value1}</p>
// 		<input value={value1} onChange={(evt) => {setValue1(evt.target.value)}}/>
//     <p>Значение второго инпута:{value2}</p>
// 		<input value={value2} onChange={(evt) => {setValue2(evt.target.value)}}/>
// 	</div>;
// }
// ----------------- задача 31 -------------------------------
// Дан инпут. Дан абзац. Сделайте так, чтобы при вводе текста в инпут, в абзаце выводилось количество введенных в инпут символов.
// ----------------- задача 31 -------------------------------
// function App() {
//   //стейт для значения инпута
// 	const [value, setValue] = useState('');
// 	//инпут
// 	return <div>
//     <p>Количество символов в инпут: {value.length}</p>
// 		<input value={value} onChange={evt => {setValue(evt.target.value)}}/>
// 	</div>;
// }
// ----------------- задача 32 -------------------------------
// Дан инпут и абзац. В инпут вводится возраст пользователя. 
// Сделайте так, чтобы при наборе текста, в абзаце автоматически появлялся год рождения пользователя.
// ----------------- задача 32 -------------------------------
// function App() {
//   let [age, setAge] = useState('0');
//   function getYearOfBirthday(age) {
//      const today = new Date();
//     return today.getFullYear() - age;
//   }
//   function handleChange(evt) {
//     setAge(evt.target.value)
//   }
//   return <>
//   <input value={age} onChange={handleChange}/>
//   <p>{age <= 0 ? 'Пользователю менее 1 года' : `Пользователь родился в  ${getYearOfBirthday(age)} году`}</p>
//   </>
// }
// ----------------- задача 33 -------------------------------
// Дан инпут и абзац. В инпут вводятся градусы Фаренгейта. 
// Сделайте так, чтобы при наборе текста, в абзаце автоматически выполнялась конвертация в градусы Цельсия.
// ----------------- задача 33 -------------------------------
// function App() {
//   let [temp, setTemp] = useState('68');
//   function getCelsius(temp) {
//     return Math.trunc((Number(temp) - 32) * (5 / 9))
//   }
//   function handleChange(evt) {
//     setTemp(evt.target.value)
//   }
//   return <>
//   <span>Температура в градусах по Фаренгейту: </span>
//   <input value={temp} onChange={handleChange}/>
//   <p>Температура в градусах по Цельсию: {getCelsius(temp)}</p>
//   </>
// }
// ----------------- задача 34 -------------------------------
// Даны 5 инпутов. Сделайте так, чтобы при вводе чисел в наши инпуты в абзац выводилось среднее арифметическое введенных чисел.
// ----------------- задача 34 -------------------------------
// function App() {
//   let [value1, setValue1] = useState('10');
//   let [value2, setValue2] = useState('10');
//   let [value3, setValue3] = useState('10');
//   let [value4, setValue4] = useState('10');
//   let [value5, setValue5] = useState('10');

//   function arithmeticalMean(values) {
//     //если передают строчные значения
//     const numberValues = values.map(Number);
//     let sum = 0;
//     const count = numberValues.length;
//     numberValues.forEach( value => sum += value);
//     return sum / count;
//   }

//   function handleChange1(evt) {
//     setValue1(evt.target.value)
//   }
//   function handleChange2(evt) {
//     setValue2(evt.target.value)
//   }
//   function handleChange3(evt) {
//     setValue3(evt.target.value)
//   }
//   function handleChange4(evt) {
//     setValue4(evt.target.value)
//   }
//   function handleChange5(evt) {
//     setValue5(evt.target.value)
//   }
//   return <>
//   <span>Значение 1: </span>
//   <input value={value1} onChange={handleChange1}/><br/>
//   <span>Значение 2: </span>
//   <input value={value2} onChange={handleChange2}/><br/>
//   <span>Значение 3: </span>
//   <input value={value3} onChange={handleChange3}/><br/>
//   <span>Значение 4: </span>
//   <input value={value4} onChange={handleChange4}/><br/>
//   <span>Значение 5: </span>
//   <input value={value5} onChange={handleChange5}/><br/>
//   <p>Среднее арифметическое: {arithmeticalMean([value1, value2, value3, value4, value5])}</p>
//   </>
// }
// ----------------- задача 35 -------------------------------
// Даны два инпута, две кнопки и абзац. Пусть в инпуты вводятся числа. 
// По нажатию на первую кнопку найдите сумму чисел, а по нажатию на вторую кнопку - произведение. 
// Результат выводите в абзац.
// ----------------- задача 35 -------------------------------
// function App() {
//   let [value1, setValue1] = useState('');
//   let [value2, setValue2] = useState('');
//   let [resultSum, setResultSum] = useState('');
//   let [resultMult, setResultMult] = useState('');
//   return <div>
//     <input value={value1} onChange={evt => setValue1(evt.target.value)}/><br/>
//     <input value={value2} onChange={evt => setValue2(evt.target.value)}/><br/>
//     <button onClick={() => setResultSum(Number(value1) + Number(value2))}>Сумма</button><br/>
//     <button onClick={() => setResultMult(Number(value1) * Number(value2))}>Произведение</button>
//     {resultSum && <p>Сумма чисел равна: {resultSum}</p>}
//     {resultMult && <p>Произведение чисел равно: {resultMult}</p>}
//   </div>
// }
// ----------------- задача 36 -------------------------------
// Пусть в textarea на каждой строке вводятся числа. Сделайте так, чтобы по мере ввода в абзац выводилась сумма введенных чисел.
// ----------------- задача 36 -------------------------------
// function App() {
// 	const [value, setValue] = useState('');
//   const [result, setResult] = useState('');
	
// 	function handleChange(event) {
// 		setValue(event.target.value);
//     const numberArray = event.target.value.split('\n').map(Number);
//     getSum(numberArray);
//     console.log(numberArray);
// 	}
//   function getSum(arr) {
//     let sum = 0;
//     arr.forEach(el => sum += el);
//     return setResult(sum);
//   }
	
// 	return <div>
// 		<textarea value={value} onChange={handleChange} />
// 		{result > 0 && <p>Сумма чисел: {result}</p>}
// 	</div>;
// }
// ----------------- задача 37 -------------------------------
// Дан чекбокс, кнопка и абзац. По клику на кнопку, если чекбокс отмечен, 
// выведите в абзац текст приветствия с пользователем, а если не отмечен - текст прощания.
// ----------------- задача 37 -------------------------------
// function App() {
//   const [checked, setChecked] = useState(true);
//   const [result, setResult] = useState('');
//   return <div>
//     <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/><br/>
//     <button onClick={() => checked ? setResult('Привет!'): setResult('Пока!')}>Показать текст!</button>
//     <p>{result}</p>
//   </div>
// }
// ----------------- задача 38 -------------------------------
// С помощью трех чекбоксов попросите пользователя выбрать языки, 
// которые он знает: html, css и js. Результат выбора по каждому языку выводите в отдельные абзацы.
// ----------------- задача 38 -------------------------------
// function App() {
//   const [checkedJS, setCheckedJS] = useState(true);
//   const [checkedCSS, setCheckedCSS] = useState(false);
//   const [checkedHTML, setCheckedHTML] = useState(false);

//   return <div>
//     <span>JS</span><input type="checkbox" checked={checkedJS} onChange={() => setCheckedJS(!checkedJS)}/>
//     <span>CSS</span><input type="checkbox" checked={checkedCSS} onChange={() => setCheckedCSS(!checkedCSS)}/>
//     <span>HTML</span><input type="checkbox" checked={checkedHTML} onChange={() => setCheckedHTML(!checkedHTML)}/>
//     <p>Пользователь знает:</p>
//     <p>{checkedJS && 'JS' }</p>
//     <p>{checkedCSS && 'CSS'}</p>
//     <p>{checkedHTML && 'HTML'}</p>
//   </div>
// }
// ----------------- задача 39 -------------------------------
// Дан чекбокс. С помощью чекбокса спросите у пользователя, если ли ему уже 18 лет. 
// Если чекбокс отмечен, покажите пользователю следующий блок кода:

// <div>
// 	<h2>Ура, вам уже есть 18</h2>
// 	<p>
// 		здесь расположен контент только для взрослых
// 	</p>
// </div>
// А если чекбокс не отмечен - то следующий:

// <div>
// 	<p>
// 		увы, вам еще нет 18 лет:(
// 	</p>
// </div>
// ----------------- задача 39 -------------------------------
// function App() {
//   let [checked, setChecked] = useState(false);
//   let message;
//   if (checked) {
//     message = <div><h2>Ура, вам уже есть 18</h2>
// 	<p>
// 		здесь расположен контент только для взрослых
// 	</p></div>
//   }
//   else {
//     message = <div>
// 	<p>
// 		увы, вам еще нет 18 лет:(
// 	</p>
// </div>
//   }
//   return <div>
//   <span>Вам исполнилось уже 18 лет?</span>
//   <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
//   {message}
//   </div>
// }
// ----------------- задача 40 -------------------------------
// Дан чекбокс и абзац. Если чекбокс отмечен, пусть абзац будет видимым на экране, а если не отмечен - спрячьте его.
// ----------------- задача 40 -------------------------------
function App() {
  let [checked, setChecked] = useState(true);
  const message = checked && <p>Какой-то текст</p>
  return <>
  <span>Нажми на меня  </span>
  <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
  {message}
  </>
}
export default App;