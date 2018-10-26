import React from 'react';

const selectForm = (props) => {
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <select id={props.label} onChange={props.changed}>
        {props.options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default selectForm;
