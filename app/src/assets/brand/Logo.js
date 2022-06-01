import React from 'react'
import '../../scss/_custom.scss';

const URL = process.env.REACT_APP_URL;
const PUBLIC = process.env.REACT_APP_PUBLIC_URL;

function logoClick() {
    window.open(URL, '_blank');
}

export const Logo = () =>{
  return (
      <div onClick={logoClick} className="cursor-pointer" title="HTTC ReactJs">
          <div className="icon icon-custom-size sidebar-brand-full sidebar-logo">
              <div className="sidebar-logo-img">
                  <img src={PUBLIC +'logo-96.png'} title="HTTC logo"  alt="logo"/>
              </div>
              <span className="sidebar-logo-span">HTTC ReactJs</span>
          </div>
          <div className="icon icon-custom-size sidebar-brand-narrow">
              <div className="sidebar-logo-img-narrow">
                  <img src={PUBLIC +'logo-96.png'} title="react app"  alt="logo"/>
              </div>
          </div>
      </div>
  );
}
