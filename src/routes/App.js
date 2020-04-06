import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Register from '../containers/Register';

const App = () => (
  <Router>
    <Layout>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/registro' component={Register} />
    </Layout>
  </Router>
);
export default App;
