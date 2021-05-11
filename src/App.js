import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './common/general.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import videoSource from './assets/imgs/video.mp4'
import "aos/dist/aos.css";
import './style.scss';
import AOS from "aos";

function App() {
  const [enableElement, setEnableElement] = useState(true)

  /****** Animation effect ******/
  useEffect(() => {
    AOS.init({
      // initialise with other settings
      duration: 1000
    });
  }, []);

  const hideVideoElement = (isHide) => {
    setEnableElement(isHide)
    AOS.refresh();
  }

  return (

    <Router>
      {enableElement && (
        <div className="w-100 video-container">
          <video playsinline autoPlay muted id="environment-video" className="w-100 custom-video" onEnded={() => hideVideoElement(false)}>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      )}
      {
        !enableElement && (
          <div>
            <Header />
            <Switch>
              <Route exact path='/' render={() => <Home />} />
              <Redirect to='/' />
            </Switch>
            <Footer />
          </div>
        )
      }

    </Router>
  );
}

export default App;
