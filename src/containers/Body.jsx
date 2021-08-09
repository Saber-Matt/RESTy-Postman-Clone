
import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ body, onChange }) => (
  <>
    <label htmlFor="body"></label>
    <textarea
      id="body"
      name="body"
      placeholder="Raw JSON Body"
      value={body}
      onChange={onChange}
    >
    </textarea>  
  </> 
);

Body.propTypes = {
  body: PropTypes.string,
  onChange: PropTypes.func,
};

export default Body;
