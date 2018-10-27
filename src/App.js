import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './App.css';

import FormContainer from './containers/form-container';
import TodosList from './containers/todos-list';
import Popin from './containers/popin';

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

const StyledContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
`;

class App extends Component {

  state = {
    showPopin: false,
    indexToShow: null
  }

  updateTodo = (id) => {
    const index = this.props.todos.findIndex(todo => todo.id === id);
    this.setState({showPopin: true, indexToShow: index});
  }

  closedPopin = () => {
    this.setState({showPopin: false, indexToShow: null})
  }

  render() {
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <StyledContainer>
          <FormContainer actions={ACTIONS} objects={OBJECTS} submit='Add new todo'/>
          <TodosList 
            todos={this.props.todos}
            toggle={this.props.onToggleTodo}
            updated={this.updateTodo}
            deleted={this.props.onRemoveTodo}/>
          {this.state.showPopin ? 
            <Popin
              actions={ACTIONS} objects={OBJECTS}
              todo={this.props.todos[this.state.indexToShow]}
              closed={this.closedPopin}
            /> : null
          }
        </StyledContainer>
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
    onRemoveTodo: (id) => dispatch({type: 'REMOVE_TODO', id: id}),
    onToggleTodo: (id) => dispatch({type: 'TOGGLE_TODO', id: id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
