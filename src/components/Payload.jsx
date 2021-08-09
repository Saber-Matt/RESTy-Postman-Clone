import React from 'react';
import PropTypes from 'prop-types';

const Payload = ({ payload }) => (
  <>
    <div>
      {payload}
    </div>
  </>
);

Payload.propTypes = {
  payload: PropTypes.string
};

export default Payload;
