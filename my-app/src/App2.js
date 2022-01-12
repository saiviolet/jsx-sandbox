import React, { useState } from 'react';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import uuid from 'react-uuid'
// ----------------- задача 41 -------------------------------
// Сделайте выпадающий список городов. Сделайте также абзац, в который будет выводиться выбор пользователя.
// ----------------- задача 41 -------------------------------
// function App2() {
//   let [value, setValue] = useState('');
//   return <div>
//     <select value={value} onChange={(evt) => setValue(evt.target.value)}>
//       <option>Харьков</option>
//       <option>Домодедово</option>
//       <option>Кривой Рог</option>
//       <option>Белгород</option>
//       <option>Минск</option>
//     </select>
//     <p>Вы выбрали: {value}</p>
//   </div>
// }
// ----------------- задача 42 -------------------------------
// Пусть в массиве хранится список городов. Выведите с помощью цикла выпадающий список этих городов.
// ----------------- задача 42 -------------------------------
// function App2() {
//   const cities = ['Харьков', 'Домодедово', 'Кривой Рог'];
//   let [value, setValue] = useState();
//   let options = cities.map(city => <option key={uuid()}>{city}</option>)
//   return <div>
//     <select value={value} onChange={(evt) => setValue(evt.target.value)}>
//       {options}
//     </select>
//     <p>Вы выбрали: {value}</p>
//   </div>
// }
// ----------------- задача 43 -------------------------------
// С помощью выпадающего списка предложите пользователю выбрать 
// к какой возрастной группе он относится: от 0 до 12 лет, от 13 до 17, от 18 до 25, либо старше 25 лет.
// ----------------- задача 43 -------------------------------
// function App2() {
//   let [value, setValue] = useState('');
//   return <div>
//     <select value={value} onChange={(evt) => setValue(evt.target.value)}>
//       <option value="1">от 0 до 12 лет</option>
//       <option value="2">от 13 до 17 лет</option>
//       <option value="3">от 18 до 25 лет</option>
//       <option value="4">старше 25 лет</option>
//     </select>
//     <p>
//       {value === "1" && 'от 0 до 12 лет'}
//       {value === "2" && 'от 13 до 17 лет'}
//       {value === "3" && 'от 18 до 25 лет'}
//       {value === "4" && 'старше 25 лет'}
//     </p>
//   </div>
// }
// ----------------- задача 44 -------------------------------
//Решить предыдущую задачу при условии, что данные хранятся в массиве
// ----------------- задача 44 -------------------------------
// function App2() {
//   let [value, setValue] = useState('');
//   let ages = ['от 0 до 12 лет', 'от 13 до 17 лет', 'от 18 до 25 лет', 'старше 25 лет'];
//   let options = ages.map((age, index) => {return <option key={uuid()} value={index}>{age}</option>})
//   return <div>
//     <select value={value} onChange={(evt) => setValue(evt.target.value)}>
//     {options}
//     </select>
//     <p>Вы выбрали: 
//       {ages[value]}
//     </p>
//   </div>
// }
// ----------------- задача 45 -------------------------------
// Даны 3 радиокнопочки. Дан абзац. Сделайте так, чтобы значение выбранной радиокнопочки выводилось в этот абзац.
// ----------------- задача 45 -------------------------------
// function App2() {
//   let [value, setValue] = useState();
//   function changeHandler(event) {
// 		setValue(event.target.value);
// 	}

//   return <div>
//     <input 
//       type="radio"
//       value="harry"
//       checked={value === 'harry' ? true : false}
//       onChange={changeHandler}
//     />
//     <input 
//       type="radio"
//       value="ron"
//       checked={value === 'ron' ? true : false}
//       onChange={changeHandler}
//     />   
//     <input 
//       type="radio"
//       value="hermione"
//       checked={value === 'hermione' ? true : false}
//       onChange={changeHandler}
//     />
//     <p>
//     {value === "harry" && 'Вы выбрали Гарри Поттера'}
//     {value === "ron" && 'Вы выбрали Рона Уизли'}
//     {value === "hermione" && 'Гермиону Грейнджер'}
//     </p>
//   </div>
// }
// ----------------- задача 46 -------------------------------
// С помощью радиокнопочек спросите у пользователя его любимый язык программирования. 
// Выведите его выбор в абзац. Если выбран язык JavaScript, похвалите пользователя.
// ----------------- задача 46 -------------------------------
// function App2() {
//   let [value, setValue] = useState();
//   function changeHandler(event) {
// 		setValue(event.target.value);
// 	}

  // return <div>
  //   <p>Какой ваш самый любимый язык программировния?</p>
  //   <span>C#</span><input 
  //     type="radio"
  //     name="c#"
  //     value="c#"
  //     checked={value === 'c#' ? true : false}
  //     onChange={changeHandler}
  //   />
  //   <span>PYTHON</span><input 
  //     type="radio"
  //     name="python"
  //     value="python"
  //     checked={value === 'python' ? true : false}
  //     onChange={changeHandler}
  //   />   
  //   <span>JS</span><input 
  //     type="radio"
  //     name="js"
  //     value="js"
  //     checked={value === 'js' ? true : false}
  //     onChange={changeHandler}
  //   />
  //   <p>
//     {value === "c#" && 'Си шарп'}
//     {value === "python" && 'Питон - так питон'}
//     {value === "js" && 'О, да вы ценитель, весьма похвально'}
//     </p>
//   </div>
// }
// ----------------- задача 47 -------------------------------
// Сделайте кнопку, по нажатию на которую будет происходить добавление нового элемента в массив.
// ----------------- задача 47 -------------------------------
// function App2() {
//   const [arr, setArr] = useState([66,34,79,52,11,22]);
//   const array = arr.map(arr => <p key={uuid()}>{arr}</p>)
//   function addNewItem() {
//     //число от 1 до 100
//     const newItem = Math.floor(Math.random() * 101);
//     setArr([...arr, newItem]);
//   }
//   return <div>
//     <p>Массив: {arr.join(',')}</p>
//     <span>Нажми, чтобы добавить новый случайный элемент в массив  </span>
//     <button onClick={addNewItem}>Жамк!</button>
//   </div>
// }

export default App2;