import React, { Fragment } from 'react';
import Users from './components/users/Users';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUsers from './components/users/AddUsers';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Fragment>
            <Header />
            <Route exact path="/" component={Users} />
            <Route exact path="/user/add" component={AddUsers} />
          </Fragment>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
