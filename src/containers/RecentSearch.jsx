import React from 'react';
import PropTypes from 'prop-types';
import Recent from 'Recent';

const RecentSearch = ({ recent, onClcik }) => {

  const recentItems = recent.map((recentItem, index) => (
    <li key={index} onClick={onClick}>

      <Recent
        id={`${recentItem.search}${recentItem.method}${recentItem.body}`}
        search={recentItem.search}
        method={recentItem.method}
      /> 
    </li>
  ));

  return <ul>{recentItems}</ul>;
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
