import React from 'react';
function User(props) {
  const {name, surname, age, id, isBan, addBan} = props;
	return <div>
    <hr />
    <p>Пользователь: {name} - {surname} - {age}</p>
		<p>номер: {id}</p>
    {isBan ? <button onClick={() => addBan(id)}>Разбанить</button> : <button onClick={() => addBan(id)}>Забанить</button>}
    <p>{isBan ? 'Забанен' : 'Не забанен'}</p>
	</div>;
}

export default User;