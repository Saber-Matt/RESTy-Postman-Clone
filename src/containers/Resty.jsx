
import React, { Component } from 'react';
import Form from '../components/form/Form';
import RecentSearch from '../containers/RecentSearch';
import Payload from '../components/payload/Payload';
import  { fetchApi } from '../services/resty.js';

export default class Resty extends Component {
  state = {
    search: '',
    method: '',
    body: '',
    payload: '',
    recent: [],
  }

  componentDidMount() {
    const exists = localStorage.getItem('RECENT');
    exists
      ? (this.setState({ recent: JSON.parse(exists)
      }))
      : (localStorage.setItem('RECENT', '[]'));
  }

  async fetchApi() {
    const { search, method, body } = this.state;

    const payload = await fetchApi(search, method, body);
    this.setState({ payload });
  }

  getAndSetLocalStorage() {
    const { search, method, body } = this.state;
    const recent = { id: search + method + body, search, method, body };

    const parsedRecent = JSON.parse(localStorage.getItem('RECENT'));
    parsedRecent.push(recent);

    const newRecent = JSON.stringify(parsedRecent);
    localStorage.setItem('RECENT', newRecent);

    this.setState({recent: parsedRecent });

    handleChange = ({ target }) => {
      this.setState({  [target.name]: target.value });
    }

    handleSubmit = async (e) => {
      e.preventDefault();

      this.fetchApi();

      this.getAndSetLocalStorage();
    }

    handleClick = ({ target }) => {
      let match;

      this.state.history.forEach(recentItem => {

        if(recentItem.id === target.id) {
          match = recentItem;
        }
      });

      this.setState({
        search: match.search,
        method: match,method,
        body: match.body
      });
    }

    render() {
      const { search, method, body, payload, recent } = this.state;

      return (
        <>
          <Form
            search={search}
            method={method}
            body={body}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          <Payload
            payload={payload}
          />
          <RecentSearch recent={recent}
          onClcik={this.handleClick}
          />
          </>  
      );
    }
  }
} 