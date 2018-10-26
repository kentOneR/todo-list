import React from 'react';

const todosList = (props) => (
  <ul>
    {props.todos.map((todo) => (
      <ul key={todo.id} onClick={props.clicked}>
        <input type='checkbox' onClick={() => props.toggle(todo.id)} defaultChecked={todo.done}/>
        <span onClick={() => props.updated(todo.id)}>{todo.action}: {todo.object}</span>
        <span onClick={() => props.deleted(todo.id)}>
          X
        </span>
      </ul>
    ))}
  </ul>
);

export default todosList;