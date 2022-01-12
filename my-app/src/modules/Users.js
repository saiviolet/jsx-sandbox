import React, {useState} from 'react';
import uuid from 'react-uuid';
import User from './User';
function Users() {
  const initUsers = [
    {id: uuid(), name: 'user1', surname: 'surn1', age: 30, isBan: true},
    {id: uuid(), name: 'user2', surname: 'surn2', age: 31, isBan: false},
    {id: uuid(), name: 'user3', surname: 'surn3', age: 32, isBan: false}
  ];

  const [users, setUsers] = useState(initUsers);
  const userList = users.map(user => <User 
		key={user.id} 
		name={user.name} 
		surname={user.surname}
		id={user.id}
    age={user.age}
    isBan={user.isBan}
    addBan={addBan}
		/>)

    function addBan(id) {
      setUsers(users.map(user => {
        if(user.id === id) user.isBan = !user.isBan;
        return user;
      }))
    }

    return <>
    {userList} </>
}
export default Users;