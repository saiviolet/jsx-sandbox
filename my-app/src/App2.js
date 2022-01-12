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
// ----------------- задача 48 -------------------------------
// Сделайте кнопку, по нажатию на которую будет происходить удаление элемента из массива. 
// Пусть номер элемента для удаления хранится в переменной.
// ----------------- задача 48 -------------------------------
  // function App2() {
  //   const item = 2;
  //   const [arr, setArr] = useState([12,15,17,14,63,21,15])
  //   function deleteItem() {
  //     //сделать копию массива
  //     const copyArr = Object.assign([], arr);
  //     //удалить элемент
  //     copyArr.splice(item-1, 1);
  //     setArr(copyArr);
  //   }
  //   return <div>
  //     <p>Массив: {arr.join(', ')}</p>
  //     <span>Нажми, чтобы удалить {item} элемент ({arr[item-1]})</span><br/>
  //     <button onClick={deleteItem}>Удалить!</button>
  //   </div>
  // }
  // ----------------- задача 49 -------------------------------
  // function App2() {
  //   const item = 2;
  //   const [arr, setArr] = useState([12,15,17,14,63,21,15])
  //   function deleteItem() {
  //     //сделать копию массива
  //     const copyArr = Object.assign([], arr);
  //     //удалить элемент
  //     copyArr[item-1] = 10000000;
  //     setArr(copyArr);
  //   }
  //   return <div>
  //     <p>Массив: {arr.join(', ')}</p>
  //     <span>Нажми, чтобы изменить {item} элемент на 10000000</span><br/>
  //     <button onClick={deleteItem}>Удалить!</button>
  //   </div>
  // }
  // ----------------- задача 50 -------------------------------
  // Дан массив: const notes = ['a', 'b', 'c', 'd', 'e'];
  // Выведите элементы этого массива в виде списка ul. 
  // Добавьте инпут для добавления новых пунктов списка. Пусть добавление происходит по потери фокуса в инпуте.
    // ----------------- задача 50 -------------------------------
  //   function App2() {
  //     let [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
  //     let [value, setValue] = useState('');

  //     const res = notes.map(item => <li key={uuid()}>{item}</li>)
  //     function addNewItem(item) {
  //       setNotes([...notes, item.target.value]);
  //       setValue('');
  // }
  //     return <>
  //     <span>Масcив элементов: </span>
  //     <ul>{res}</ul>
  //     <span>Добавить элемент в массив по потери фокуса в инпуте: </span>
  //     <input value={value} onChange={evt => setValue(evt.target.value)} onBlur={evt => addNewItem(evt)}/>
  //     </>
  //   }
// ----------------- задача 51 -------------------------------
// Дан массив:
// const notes = ['a', 'b', 'c', 'd', 'e'];
// Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы в конце каждой li стояла кнопка для ее удаления.
// ----------------- задача 51 -------------------------------
// function App2() {
//   let [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);

//   const res = notes.map((item, index) => {
//     return <li key={uuid()}>{item}
//     <button onClick={() => remItem(index)}> удалить</button>
//     </li>

// })
// function remItem(index) {
//   setNotes([...notes.slice(0, index), ...notes.slice(index + 1)]);
// }
//   return <>
//   <span>Масcив элементов: </span>
//   <ul>{res}</ul>
//   </>
// }
export default App2;