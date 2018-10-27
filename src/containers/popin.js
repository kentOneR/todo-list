import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectForm from '../components/selectForm';

class Popin extends Component {

  state = {
    action: 'eat',
    object: 'the banana',
    done: false
  }

  componentWillMount() {
    this.setState({
      id: this.props.todo.id,
      action: this.props.todo.action,
      object: this.props.todo.object,
      done: this.props.todo.done
    })
  }

  componentDidMount() {
    fetch('http://aws.random.cat/meow', {
      method: 'get',
      mode: 'cors'
      })
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  onActionChangedHangler = (e) => {
    this.setState({action: e.target.value});
  }

  onObjectChangedHangler = (e) => {
    this.setState({object: e.target.value});
  }

  onUpdateValues = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    this.setState({id: id});
    this.props.updateValues(this.state);
    this.props.closed();
  };

  render() {
    return (
      <div>
        <span onClick={this.props.closed}>X</span>
        <p>Action: {this.props.todo.action}</p>
        <p>Object: {this.props.todo.object}</p>
        <p>Satus: {this.props.todo.done ? 'done' : 'todo'}</p>
        <img src={this.state.catUrl} alt='random cat'/>
        <form>
          <SelectForm label='action' options={this.props.actions} changed={this.onActionChangedHangler}/>
          <SelectForm label='object' options={this.props.objects} changed={this.onObjectChangedHangler} />
          <input type='submit' value='Update todo' onClick={this.onUpdateValues} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateValues: (todo) => dispatch({type: 'UPDATE_TODO', todo: todo})
  }
}

export default connect(null, mapDispatchToProps)(Popin);