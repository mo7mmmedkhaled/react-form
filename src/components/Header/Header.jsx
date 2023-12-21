import React from 'react';
import image from '../../assets/my_bayut_ar.4632df06db133d1b7f73695c83f38251.png';
import './Header.css';

const Header = () => {
  return (
    <div className="container pt-4 pb-4 header-bar">
      <div className="row justify-content-between">
        <div className="col-lg-1 col-md-2 col-2">
          <img src={image} alt="" className="w-100" />
        </div>
        <div className="col-lg-1 col-md-2 col-2">
          <img src={image} alt="" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Header;
