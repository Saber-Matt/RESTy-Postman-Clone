import React, { Component } from 'react';
import Form from './Form.jsx';
import Payload from './Payload.jsx';

export default class Resty extends Component {
  state = {
    search: '',
    method: '',
    body: '',
    payload: '',
  }

  handleChange = ({ target }) =>
  {
    this.state({
      [target.name]:target.value
    });
  }
  render() {
    const { search, method, body, payload } = this.state;

    return (
      <>
        <Form 
          search = {search}
          method = {method}
          onChange= {this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Payload payload={payload} />
      </>
    );
  }
}
