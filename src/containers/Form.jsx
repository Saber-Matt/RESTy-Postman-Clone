import React from 'react';
import PropTypes from 'prop-types';
import Search from './search/Search';
import Method from './method/Method';
import Body from './body/Body';
import styles from './Form.css';

export default class Form extends Component {
  render ({ search, method, body, onChange, onSubmit }) => (
    <form onSubmit={onSubmit} className={styles.Form}>
      <>
        <Search 
          search={search}
          onChange={onChange} 
        />
        <button>Send</button>
      </>
      <Method 
        method={method}
        onChange={onChange} 
      />
      <Body 
        body={body}
        onChange={onChange} 
      />
    </form>
  );
  
  Form.propTypes = {
    search: PropTypes.string,
    method: PropTypes.string,
    body: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
  };
  
  render() {
    return (
      <div>
        
      </div>
    )
  }

export default Form;


