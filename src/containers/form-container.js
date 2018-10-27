import React, {Component} from 'react';
import { connect } from 'react-redux';
import SelectForm from '../components/selectForm';

class FormContainer extends Component {

  state = {
    id: 0,
    action: 'eat',
    object: 'the banana',
    done: false
  }

  onActionChangedHangler = (e) => {
    this.setState({action: e.target.value});
  }

  onObjectChangedHangler = (e) => {
    this.setState({object: e.target.value});
  }

  onSubmitValues = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    this.setState({id: id});
    this.props.submitValues(this.state);
  };

  onRandomValues = (e) => {
    e.preventDefault();
    const id = new Date().getTime(),
          action = this.props.actions[Math.floor(Math.random()*this.props.actions.length)],
          object = this.props.objects[Math.floor(Math.random()*this.props.objects.length)];

    this.setState({
      id: id,
      action: action,
      object: object
    });
    this.props.submitValues(this.state);
  };

  render() {
    return (
      <form>
        <SelectForm label='action' options={this.props.actions} changed={this.onActionChangedHangler}/>
        <SelectForm label='object' options={this.props.objects} changed={this.onObjectChangedHangler} />
        <input type='submit' value={this.props.submit} onClick={this.onSubmitValues} />
        <input type='submit' value='Random Todo' onClick={this.onRandomValues} />
      </form>
    );
  };

};

const mapDispatchToProps = dispatch => {
  return {
    submitValues: (todo) => dispatch({type: 'ADD_TODO', todo: todo})
  }
};

export default connect(null, mapDispatchToProps)(FormContainer);