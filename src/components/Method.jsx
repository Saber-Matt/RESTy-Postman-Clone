import React from 'react';
import PropTypes from 'prop-types';

const methods = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];

const Method = ({ method, onChange }) => (
  <div>
    {methods.map(m => (
      <div key={m}>
        <input
          id={m}
          type="radio"
          name="method"
          value={m}
          onChange={onChange}
          checked={method === m }
        />
        <label htmlFor={m}>{m}</label>
      </div>
    ))
    }
  </div>
);

Method.propTypes = {
  method: PropTypes.string,
  onChange: PropTypes.func,
};

export default Method;
