import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

class ReactTest extends React.Component {

  componentDidMount() {
    //do nothing
  }

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

ReactDOM.render(<ReactTest />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
