import React, { Component } from 'react';
import FormContainer from './form-container';

class Popin extends Component {
  render() {
    return (
      <div>
        <span onClick={this.props.closed}>X</span>
        <p>Action: {this.props.todo.action}</p>
        <p>Object: {this.props.todo.object}</p>
        <p>Satus: {this.props.todo.done ? 'done' : 'todo'}</p>
        <FormContainer actions={this.props.actions} objects={this.props.objects} submit='Update todo'/>
      </div>
    );
  }
}

export default Popin;