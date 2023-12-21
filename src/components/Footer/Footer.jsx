import React from 'react';
import './Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import imageApp from '../../assets/Google-Play.png';

const Footer = () => {
  return (
    <div className="w-100 bk-image">
      <div className="col-6 flex-class pe-5">
        <div className="row col-12">
          <div className="col-lg-12 about">
            <div className="d-flex">
              <a href="/" className="link-footer">
                نبذه عنا
              </a>
            </div>
            <span>|</span>
            <div className="d-flex">
              <a href="/" className="link-footer">
                اتصل بنا
              </a>
            </div>
            <span>|</span>
            <div className="d-flex">
              <a href="/" className="link-footer">
                سياسة الخصوصية والشروط
              </a>
            </div>
          </div>
        </div>
        <div className="row col-12">
          <div className="d-flex col-lg-12">
            <span className="country-span">الدوله : </span>
          </div>
        </div>
        <div className="row col-12">
          <div className="d-flex col-lg-12">
            <span>© 2008 - 2023 Bayut.eg المنصة العقارية في مصر</span>
          </div>
        </div>
      </div>
      <div className="col-6 flex-class">
        <div className="col-lg-12 d-flex justify-content-center">
          <FaFacebook className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaLinkedinIn className="social-icon" />
          <FaYoutube className="social-icon" />
          <img src={imageApp} alt="" className="col-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
