import React from 'react';

const todosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <li key={todo.id} onClick={props.clicked}>
        <input type='checkbox' onClick={() => props.toggle(todo.id)} defaultChecked={todo.done}/>
        <span onClick={() => props.updated(todo.id)}>{todo.action}: {todo.object}</span>
        <span className='closed-popin' onClick={() => props.deleted(todo.id)}>
          X
        </span>
      </li>
    ))}
  </ul>
);

export default todosList;