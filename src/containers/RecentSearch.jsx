import React from 'react';
import PropTypes from 'prop-types';
import Recent from '../components/Recent.jsx';


const RecentSearch = ({ recent, onClick }) => {

  const recentItems = recent.map((recentItem, index) => (
    <li key={index} onClick={onClick}>

      <Recent
        id={`${recentItem.search}${recentItem.method}${recentItem.body}`}
        search={recentItem.search}
        method={recentItem.method}
      /> 
    </li>
  ));

  if(recent === []) {
    return (
      <section>
        <h1>Recent Searches</h1>
        <ul>Try fetching something.</ul>
      </section>
    );
  
  } else { 
    return (
      <section>
        <h1>Recent Searches</h1>
        <ul>{recentItems}</ul>
      </section>
    );
  }
};

RecentSearch.propTypes = {
  recent: PropTypes.arrayOf(
    PropTypes.shape({
      search: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      onClick:PropTypes.func.isRequired
        .isRequired,
    }))
};

export default RecentSearch;
