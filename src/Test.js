import React from 'react';

function Test(props) {
  return (
    <p className="App-header">
        Hey {props.name},{props.email}, What's up !!
    </p>
  );
}

export default Test;