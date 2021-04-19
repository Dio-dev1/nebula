import React from 'react';
import portfolio from '../../assets/imgs/portfolio.png';
import projects from '../../assets/imgs/projects.png';
import fundBusinessWhite from '../../assets/imgs/fund-business-white.png';
import fundBusinessBlack from '../../assets/imgs/fund-business-black.png';
import tradeBigImg from '../../assets/imgs/trade-big.png';
import tradeSmallImg from '../../assets/imgs/trade-small.png';
import increaseImg from '../../assets/imgs/increase.png';
import bitcoinImg from '../../assets/imgs/bitcoin.png';
import currencyImg from '../../assets/imgs/currency.png';
import settingsImg from '../../assets/imgs/settings.png';
import ordersImg from '../../assets/imgs/orders.png';
import './style.scss';

const Home = () => {

  return (
    <div className="home-section">

      {/* portfolio-projects section */}
      <div className="portfolio-projects-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-section">
                <h1>Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico </h1>
                <p>Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico vocent alterum nam ut. Id doming viderer qui, populo scripserit </p>
                <div className="subscribe d-flex align-items-center justify-content-between">
                  <input type="email" placeholder="your@email.com" />
                  <button className="fill-btn">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="position-relative img-section">
                <img src={portfolio} alt="big-phone" className="portfilio-img" />
                <img src={projects} alt="projects" className="position-absolute small-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* description section */}
      <div className="description-section w-100">
        <div className="d-flex justify-content-center">
          <h1 className="text-center">Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico </h1>
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-center">Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico vocent alterum nam ut. Id doming viderer qui, populo scripserit </p>
        </div>
      </div>

      {/* fund your business section */}
      <div className="fund-business-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-section position-relative d-flex justify-content-end">
                <img src={fundBusinessWhite} alt="fundBusinessWhite" className="position-absolute fund-business-white" />
                <img src={fundBusinessBlack} className="fund-business-black" alt="fundBusinessBlack" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-section">
                <h1>Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico </h1>
                <p>Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico vocent alterum nam ut. Id doming viderer qui, populo scripserit </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* trade section */}
      <div className="trade-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-section">
                <h1>Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico </h1>
                <p>Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico vocent alterum nam ut. Id doming viderer qui, populo scripserit </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-section position-relative">
                <img src={tradeBigImg} className="trade-big" alt="tradeBigImg" />
                <img src={tradeSmallImg} className="position-absolute trade-small" alt="tradeSmallImg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* list section */}
      <div className="list-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="content">
                <div className="logo-section d-flex align-items-center justify-content-center">
                  <img src={increaseImg} alt="increaseimg" />
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico vocent alterum nam ut. Id doming vi
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <div className="logo-section d-flex align-items-center justify-content-center">
                  <img src={bitcoinImg} alt="bitcoinImg" />
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico vocent alterum nam ut. Id doming vi
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="content">
                <div className="logo-section d-flex align-items-center justify-content-center">
                  <img src={currencyImg} alt="currencyImg" />
                </div>
                <div className="description">
                  Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico vocent alterum nam ut. Id doming vi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* orders-settings section */}
      <div className="orders-settings-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="img-section position-relative d-flex justify-content-end">
                <img src={settingsImg} className="settings" alt="settings" />
                <img src={ordersImg} className="position-absolute orders" alt="orders" />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-section">
                <h1>Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico </h1>
                <p>Lorem ipsum dolor sit amet, cu exerci everti regione mea, iudico vocent alterum nam ut. Id doming viderer qui, populo scripserit </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;
