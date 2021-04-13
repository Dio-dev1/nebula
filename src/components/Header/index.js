import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/imgs/logo.png';
import usFlag from '../../assets/imgs/us-flag.png';
import './style.scss';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const [isSubMenu, setIsSubMenu] = useState(false)

  /***** desktop menu click event ******/
  const desktopLinkTo = (url) => {
    history.push(url)
  }

  useEffect(() => {
    document.addEventListener("click", closeSelect);
    return () => document.removeEventListener("click", closeSelect);
  }, [isSubMenu]);

  const closeSelect = (evt) => {
    if (!evt.target.closest(".multi-lang-click")) setIsSubMenu(false);
  }

  return (
    <div className="header-section">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between content">
          <div className="logo-section">
            <img src={logoImg} alt="logo" onClick={() => desktopLinkTo('/')} />
          </div>
          <div className="menu-list d-flex align-items-center">
            <div>
              <span onClick={() => desktopLinkTo('/team')}>Team</span>
            </div>
            <div>
              <span onClick={() => desktopLinkTo('/contact')}>Contact</span>
            </div>
            <div>
              <span onClick={() => desktopLinkTo('/faq')}>FAQ</span>
            </div>
            <div className="multi-lang position-relative">
              <div onClick={() => setIsSubMenu(true)} className="multi-lang-click">
                <img src={usFlag} alt="countryFlag" />
                <span>EN</span>
              </div>
              {/* sub menu */}
              {
                isSubMenu &&
                <div className="position-absolute sub-menu">
                  <div className="item d-flex">
                    <img src={usFlag} alt="countryFlag" />
                    <span>FR</span>
                  </div>
                  <div className="item d-flex">
                    <img src={usFlag} alt="countryFlag" />
                    <span>GE</span>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;