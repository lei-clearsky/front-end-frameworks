import React from 'react';
import Formsy from 'formsy-react';

const MyInput = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  _changeValue(event) {
    this.setState({ 
      _value: event.currentTarget.value,
      _isPristine: false 
    });
    // this.setValue(event.currentTarget[this.props.type === 'checkbox' ? 'checked' : 'value']);
  },

  _onBlur(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {

    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = this.props.className + ' ' + (this.showRequired() ? 'required' : this.showError() ? 'error' : null);

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();
    console.log('error message ', errorMessage);

    return (
      <div className='form-group'>
        <label htmlFor={this.props.name}>{this.props.title}</label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          onChange={this._changeValue}
          value={this.getValue()}
          checked={this.props.type === 'checkbox' && this.getValue() ? 'checked' : null}
          onBlur={this._onBlur} 
        />
        <span className='validation-error'>{errorMessage}</span>
      </div>
    );
  }
});

export default MyInput;
