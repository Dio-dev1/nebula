import React, { useState, useEffect } from 'react';
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
import { memberAdd } from '../../rest/api';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Home = () => {
  const [email, setEmail] = useState('');
  const [errMsg, setErrMsg] = useState('');

  /****** Subscribe email by a click a button ******/
  const subscribe = () => {
    if(email==='') return;

    let validation = validateEmail(email);
    if(!validation) {
      setErrMsg('Please enter correct email address!');
      return;
    }
    setErrMsg('');
    memberAdd(email)
      .then(data => { 
        if(data.status==='subscribed'){
          toast('Success! Your email has been subscribed',{type:'success'});
        } else {
          toast(data.detail,{type:'error'});
        }
       })
      .catch(error => { console.log(JSON.stringify(error)) });
  }

  /**
  * Validate email by pattern
  * @param email string
  */
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  return (
    <div className="home-section position-relative">
      <div className="piece-bg-1 position-absolute"></div>

      {/* portfolio-projects section */}
      <div className="portfolio-projects-section position-relative">
        <div className="piece-bg-2 position-absolute"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 d-flex align-items-center">
              <div className="text-section"  data-aos="fade-right">
                <h1>Nebula Capital<br />
Democratized Finance for The Digital Economy<br />
Take back control with the ultimate investments marketplace designed for the democratization of global capital access through tokenized assets and ventures.<br />
We have adopted the ideal to reality</h1>
                <p>Find out more about how you can reach new investment opportunities, through nebula.</p>
                <div className="subscribe d-flex align-items-center justify-content-between position-relative">
                  <span className="err-msg position-absolute">{errMsg}</span>
                  <input type="email" placeholder="your@email.com" value={email} onChange={(evt) => setEmail(evt.target.value)} />
                  <button className={email==='' ? 'fill-btn not-allow' : 'fill-btn'} onClick={subscribe}>Subscribe</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12">
              <div className="position-relative img-section" data-aos="fade-left">
                <img src={portfolio} alt="big-phone" className="portfilio-img" />
                <img src={projects} alt="projects" className="position-absolute small-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* description section */}
      <div className="description-section w-100 position-relative">
        <div className="piece-bg-3 position-absolute"></div>
        <div className="d-flex justify-content-center" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
          <h1 className="text-center">Start investing today with nebula!</h1>
        </div>
        <div className="d-flex justify-content-center" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000">
          <p className="text-center">Enable your assets to get involved in the economy's growth.</p>
        </div>
      </div>

      <div className="business-trade-section">
        {/* fund your business section */}
        <div className="fund-business-section position-relative">
          <div className="business-bg-section position-absolute"></div>
          <div className="piece-bg-4 position-absolute"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="img-section position-relative d-flex justify-content-end">
                  <img src={fundBusinessWhite} alt="fundBusinessWhite" className="position-absolute fund-business-white" />
                  <img src={fundBusinessBlack} className="fund-business-black" alt="fundBusinessBlack" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center" data-aos="fade-left">
                <div className="text-section">
                  <h1>The place where investors and ventures are connected.</h1>
                  <p>Access a variety of projects provided by either individual enterpreneurs or companies exposed to a multiude of industries, enabling you to successfully create a diversified portfolio and hedge risks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trade section */}
        <div className="trade-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center" data-aos="fade-right">
                <div className="text-section">
                  <h1>We offer you efficient decision-making solutions!</h1>
                  <p>Instantly track your investment's evolution through our mobile app, while contantly keeping in touch iwth the projects you have invested inh.
                    Transparency is the key in successful investments!
                  </p>
                </div>
              </div>
              <div className="col-md-6" data-aos="fade-left">
                <div className="img-section position-relative">
                  <img src={tradeBigImg} className="trade-big" alt="tradeBigImg" />
                  <img src={tradeSmallImg} className="position-absolute trade-small" alt="tradeSmallImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="list-orders-section">
        {/* list section */}
        <div className="list-section">
          <div className="container">
            <div className="row position-relative">
              <div className="piece-bg-5 position-absolute"></div>
              <div className="col-md-4" data-aos="fade-right">
                <div className="content h-100">
                  <div className="logo-section d-flex align-items-center justify-content-center">
                    <img src={increaseImg} alt="increaseimg" />
                  </div>
                  <div className="description">
                    Profit from the Nebula marketplace's evolution, through delegation.
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="zoom-in">
                <div className="content h-100">
                  <div className="logo-section d-flex align-items-center justify-content-center">
                    <img src={bitcoinImg} alt="bitcoinImg" />
                  </div>
                  <div className="description">
                    Be exposed to the crypto phenomenon, with an emphasis on the technological advantages.
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-left">
                <div className="content h-100">
                  <div className="logo-section d-flex align-items-center justify-content-center">
                    <img src={currencyImg} alt="currencyImg" />
                  </div>
                  <div className="description">
                   Keep your crypto assets as liquid as possible with Nebula.
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
                <div className="img-section position-relative d-flex justify-content-end" data-aos="zoom-in-right">
                  <div className="piece-bg-6 position-absolute"></div>
                  <img src={settingsImg} className="settings" alt="settings" />
                  <img src={ordersImg} className="position-absolute orders" alt="orders" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="text-section" data-aos="zoom-in-left">
                  <h1>We have adapted the ideal to reality.</h1>
                  <p>Our marketplace is legally compliant to your coutry of provenance and gives you an extra layer of protection, by employing a team of professionals that check the validity of the projects listed on our marketplace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Home;
