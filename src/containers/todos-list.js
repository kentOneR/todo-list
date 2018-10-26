import React from 'react';

const todosList = (props) => (
    <ul>
        {props.todos.map((todo) => (
            <ul key={todo.id} onClick={props.clicked}>{todo.action}: {todo.object}<span onClick={() => props.deleted(todo.id)}>X</span></ul>
        ))}
    </ul>
);

export default todosList;