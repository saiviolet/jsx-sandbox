import React, { useState } from 'react';
import Products from './modules/Products';
import Users from './modules/Users';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

function App() {
  return <div>
    <Products />
    <Users />
  </div>
}

// ============
//Дан массив юзеров. Вывести их в таблице при помощи цикла
// function App() {
//   const userList = [
//     {id: uuid(), name: 'Вася', surn: 'Пупкин', age: 30},
//     {id: uuid(), name: 'Коля', surn: 'Бездомный', age: 31},
//     {id: uuid(), name: 'Оля', surn: 'Сероглазкина', age: 32},
//   ];
//   let users = userList.map(user => <User key={user.id} name={user.name} surn={user.surn} age={user.age}/>)
//   return <table border="1">
//     <thead>
//       <tr>
//         <td>Имя</td>
//         <td>Фамилия</td>
//         <td>Возраст</td>
//       </tr>
//     </thead>
//     <tbody>{users}</tbody>

//   </table>
// }
export default App;