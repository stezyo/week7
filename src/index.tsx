import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, Signin } from './components'; //NEW_ADDITION
import reportWebVitals from './reportWebVitals';
//...other imports above
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles.css'

//...other imports below

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={'Car Inventory'}/>
        </Route>

        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>

        <Route path='/signin'>
          <Signin></Signin>
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();