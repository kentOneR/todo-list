import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import FormContainer from './containers/form-container';
import TodosList from './containers/todos-list';

const ACTIONS = [
  'eat',
  'sleep',
  'sell',
  'buy',
  'destroy',
  'throw',
  'bury',
];


const OBJECTS = [
  'the banana',
  'the dog',
  'a fireman',
  'a dancing guy',
  'Station F',
  'the coffin',
];


class App extends Component {

  removeTodo = (id) => {
    this.props.onRemoveTodo(id);
  }

  render() {
    return (
      <div className="App">
        <FormContainer actions={ACTIONS} objects={OBJECTS} />
        <TodosList todos={this.props.todos} deleted={this.removeTodo}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      todos: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveTodo: (id) => dispatch({type: 'REMOVE_TODO', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
