import React from 'react';
import ReactDOM from 'react-dom';
import Resty from '../containers/Resty.jsx';

export default function App() {
  return (
    <>
      <h1>RESTy Postman Clone</h1>
      <h2>Come on now, give it a try!</h2>
      <Resty />

    </>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
