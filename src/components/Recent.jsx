import React from 'react';
import PropTypes from 'prop-types';

const Recent = ({ id, search, method }) => (
  <>
    <article id={id}>
      <h2 id={id}>{method}</h2>
      <p id={id}>{search}</p>
    </article>
  </>
);

Recent.propTypes = {
  id: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default Recent;
