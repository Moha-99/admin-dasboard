import React, { Fragment } from 'react';
import Users from './components/users/Users';
import Header from './components/layout/Header';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AddUsers from './components/users/AddUsers';
import EditUsers from './components/users/EditUsers';
import store from './store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Fragment>
            <Header />
            <ToastContainer autoClose={3000} hideProgressBar />
            <Route exact path="/" component={Users} />
            <Route exact path="/user/add" component={AddUsers} />
            <Route exact path="/user/edit" component={EditUsers} />
          </Fragment>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
