
import React, { Component } from 'react';
import Payload from '../components/Payload';
import RecentSearch from '../containers/RecentSearch';
import Header from '../components/app/Header';
import Form from './Form';
import { fetchApi } from '../services/fetch';

export default class Resty extends Component {
  state = {
    search: '',
    method: '',
    body: '',
    payload:'Please make a fetch!',
    recent: [],
  }
  componentDidMount() {
    const recentItem = localStorage.getItem('RECENT');
    recentItem
      ? (this.setState({ recent: JSON.parse(recentItem) }))
      : (localStorage.setItem('RECENT', '[]'));
  }
  async fetchAPI() {
    const { search, method, body } = this.state;
    const res = await fetchApi(search, method, body);
    const payload = JSON.parse(res);
    this.setState({ payload });
  }
  getAndSetLocalStorage() {
    const { search, method, body } = this.state;
    const recent = {
      id: search + method + body,
      search,
      method,
      body
    };
    const parsedRecentSearch = JSON.parse(localStorage.getItem('RECENT'));
    parsedRecentSearch.push(recent);
    const newSearch = JSON.stringify(parsedRecentSearch);
    localStorage.setItem('RECENT', newSearch);
    this.setState({ recent: parsedRecentSearch });
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    this.fetchAPI();
    this.getAndSetLocalStorage();
  }
  handleClick = ({ target }) => {
    let match;
    this.state.recent.forEach(recentItem => {
      if(recentItem.id === target.id) {
        match = recentItem;
      }
    });
    this.setState({
      search: match.search,
      method: match.method,
      body: match.body
    });
  }
  render() {
    const { search, method, body, payload, recent } = this.state;
    return (
      <>
        <Header />
        <section>
          <div>
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
          </div>
          <RecentSearch
            recent={recent}
            onClick={this.handleClick}
          />
        </section>
      </>
    );
  }
}
