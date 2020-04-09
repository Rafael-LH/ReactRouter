import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '@components/Layout';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';

const App = () => (
  <Router>
    <Layout>
      {/* lo que hace Switch es funcionar exactamente como un switch case y de esta manera evitar error como por ejemplo si yo por alguna razon
      tengo tres path con / y accedo a ese path lo que hara es renderar los tres componentes pero si yo tengo mis Route dentro del un Switch
      lo que hara es solo renderear el primer componente que coincida con el path de la url */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/registro' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);
export default App;
