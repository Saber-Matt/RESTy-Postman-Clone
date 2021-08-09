
import React from 'react';
import PropTypes from 'prop-types';

const Recent = ({ search, method }) => (
  <>
    <p>{method}</p>
    <p>{search}</p>
  </>  
);

Recent.propTypes = {
  search: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default Recent;
