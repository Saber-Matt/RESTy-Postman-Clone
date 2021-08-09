import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import Method from '../components/Method';

const Form = ({ search, method, body, onChange, onSubmit }) => (
  <>
    <form onSubmit={onSubmit} >
      <div>
        <button>Send</button>
      </div>
      <Body
        body={body}
        onChange={onChange}
      />
      <Method/>
    </form>
  </>
);
Form.propTypes = {
  search: PropTypes.string,
  method: PropTypes.string,
  body: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
export default Form;
