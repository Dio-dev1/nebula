import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './common/general.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  /****** Animation effect ******/
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 1000
    });
    // AOS.refresh();
  }, []);

  return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' render={() => <Home />} />
              <Redirect to='/' />
            </Switch>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
