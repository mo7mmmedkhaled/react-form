import React, { useState } from 'react';
import './FormCard.css';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import BuyerPop from '../BuyerPop/BuyerPop';
import HousingPop from '../HousingPop/HousingPop';
import CountRoomPop from '../CountRoomPop/CountRoomPop';
import DistancePop from '../DistancePop/DistancePop';
import PricePop from '../PricePop/PricePop';
// import { data } from '../../assets/dataSearchValue';

const FormCard = () => {
  const [toogle, setToogle] = useState(false);
  const [toogle2, setToogleA] = useState(false);
  const [toogle3, setToogleB] = useState(false);
  const [toogle4, setToogleC] = useState(false);
  const [toogle5, setToogleD] = useState(false);
  const [Buy, setBuy] = useState('للبيع');
  const [contant, setContent] = useState('سكني');
  const [contantA, setContentA] = useState('عدد الغرف & الحمامات');
  const [contantB, setContentB] = useState('المساحة (متر مربع)');
  const [contantD, setContentD] = useState('السعر (ج.م)');

  const [inputvalue, setInputValue] = useState('');

  const clickHandeller = () => {
    setToogle(!toogle);
    setToogleA(false);
    setToogleB(false);
    setToogleC(false);
    setToogleD(false);
  };

  const clickHandeller2 = () => {
    setToogleA(!toogle2);
    setToogle(false);
    setToogleB(false);
    setToogleC(false);
    setToogleD(false);
  };
  const clickHandeller3 = () => {
    setToogleB(!toogle3);
    setToogle(false);
    setToogleA(false);
    setToogleC(false);
    setToogleD(false);
  };
  const clickHandeller4 = () => {
    setToogleC(!toogle4);
    setToogle(false);
    setToogleA(false);
    setToogleB(false);
    setToogleD(false);
  };
  const clickHandeller5 = () => {
    setToogleD(!toogle5);
    setToogle(false);
    setToogleA(false);
    setToogleB(false);
    setToogleC(false);
  };

  const chiledFun = (item) => {
    if (item) {
      setToogleA(false);
      setContent(item);
    } else {
      return;
    }
  };
  const chiledFun1 = (item2) => {
    if (item2) {
      setToogle(false);
      setBuy(item2);
    } else {
      return;
    }
  };
  const chiledFun2 = (item3) => {
    if (item3) {
      setToogleB(false);
      setContentA(item3);
    } else {
      return;
    }
  };
  const DestanceFun = (item4, item5) => {
    if (item4 && item5) {
      setToogleC(false);
      setContentB(`${item4},${item5}`);
    } else {
      return;
    }
  };
  const priceFun = (item6, item7) => {
    if (item6 && item7) {
      setToogleD(false);
      setContentD(`${item6},${item7}`);
    } else {
      return;
    }
  };
  return (
    <div className="main-form">
      <div className="col-xlg-5 col-lg-7 col-md-9">
        <div className="col-12 branch-form">
          <div className="row">
            <div className="col-3 position-relative">
              <div className="input-form" onClick={clickHandeller}>
                <span>{Buy}</span>
                {toogle ? (
                  <BsCaretUpFill className="icon" />
                ) : (
                  <BsCaretDownFill className="icon" />
                )}
              </div>
              {toogle && (
                <div className="popup-fig-right">
                  <BuyerPop donehand={chiledFun1} />
                </div>
              )}
            </div>
            <div className="col-6 position-relative">
              <div className="input-form">
                <span>
                  <input
                    type="text"
                    placeholder="أدخل الموقع"
                    className="location-input"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputvalue}
                  />
                </span>
                <MdLocationOn className="icon" />
              </div>
              {inputvalue && (
                <div className="popup-fig-right-special col-12">
                  {inputvalue}
                </div>
              )}
            </div>
            <div className="col-3 position-relative">
              <div className="input-form" onClick={clickHandeller2}>
                <span>{contant}</span>
                {toogle2 ? (
                  <BsCaretUpFill className="icon" />
                ) : (
                  <BsCaretDownFill className="icon" />
                )}
              </div>
              {toogle2 && (
                <div className="popup-fig-left">
                  <HousingPop donehand={chiledFun} />
                </div>
              )}
            </div>
            <div className="col-3 position-relative">
              <div className="input-form" onClick={clickHandeller3}>
                <span>{contantA}</span>
                {toogle3 ? (
                  <BsCaretUpFill className="icon" />
                ) : (
                  <BsCaretDownFill className="icon" />
                )}
              </div>
              {toogle3 && (
                <div className="popup-fig-right">
                  <CountRoomPop donehand={chiledFun2} />
                </div>
              )}
            </div>
            <div className="col-3 position-relative">
              <div className="input-form" onClick={clickHandeller4}>
                <span>{contantB}</span>
                {toogle4 ? (
                  <BsCaretUpFill className="icon" />
                ) : (
                  <BsCaretDownFill className="icon" />
                )}
              </div>
              {toogle4 && (
                <div className="popup-fig-right-special">
                  <DistancePop donehand={DestanceFun} />
                </div>
              )}
            </div>
            <div className="col-3 position-relative">
              <div className="input-form" onClick={clickHandeller5}>
                <span>{contantD}</span>
                {toogle5 ? (
                  <BsCaretUpFill className="icon" />
                ) : (
                  <BsCaretDownFill className="icon" />
                )}
              </div>
              {toogle5 && (
                <div className="popup-fig-right-special">
                  <PricePop donehand={priceFun} />
                </div>
              )}
            </div>
            <div className="col-3 ">
              <div className="input-form color-gre">
                <a href="/" className="link-search">
                  ابحث
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-3 d-flex justify-content-center">
              <button className="button-research">إعادة البحث</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
