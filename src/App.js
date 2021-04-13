import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './common/general.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {

  return (
      <Router>
        <Header />
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Redirect to='/' />
          </Switch>
        <Footer />
      </Router>
  );
}

export default App;
