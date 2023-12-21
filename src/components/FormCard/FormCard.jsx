import React, { useState } from 'react';
import './FormCard.css';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import BuyerPop from '../BuyerPop/BuyerPop';
import HousingPop from '../HousingPop/HousingPop';
import CountRoomPop from '../CountRoomPop/CountRoomPop';
import DistancePop from '../DistancePop/DistancePop';
import PricePop from '../PricePop/PricePop';
import { Link } from 'react-router-dom';
// import { data } from '../../assets/dataSearchValue';

const FormCard = () => {
  const [toogle1, setToogle] = useState(false);
  const [toogle2, setToogleA] = useState(false);
  const [toogle3, setToogleB] = useState(false);
  const [toogle4, setToogleC] = useState(false);
  const [toogle5, setToogleD] = useState(false);
  const [contantC, setContent] = useState('سكني');
  const [contantA, setContentA] = useState('عدد الغرف & الحمامات');
  const [contantB, setContentB] = useState('المساحة (متر مربع)');
  const [contantD, setContentD] = useState('السعر (ج.م)');
  const [contantE, setContentE] = useState('للبيع');

  const [inputvalue, setInputValue] = useState('');

  // useEffect(() => {
  //   // Attach click event listener to the document
  //   document.addEventListener('click', handleDocumentClick);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, []);

  const clickHandeller1 = () => {
    setToogle(!toogle1);
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
      setContentE(item2);
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
  // const handleDocumentClick = (event) => {
  //   // Check if the click is outside the pop-up
  //   console.log('Document Clicked');
  //   const popup = document.getElementById('popup');
  //   console.log('Popup Element:', popup);
  //   if (popup && !popup.contains(event.target)) {
  //     setToogleA(false);
  //     setToogleB(false);
  //     setToogleC(false);
  //     setToogleD(false);
  //   }
  // };

  return (
    <div className="main-form">
      <div className="col-xlg-7 col-lg-7 col-md-9">
        <div className="col-12 branch-form">
          <div className="row">
            <div id="popup" className="col-lg-3 col-md-6 position-relative">
              <div className="input-form" onClick={clickHandeller1}>
                <span>{contantE}</span>
                {toogle1 ? (
                  <BsCaretUpFill className="icon" />
                ) : (
                  <BsCaretDownFill className="icon" />
                )}
              </div>
              {toogle1 && (
                <div className="popup-fig-right">
                  <BuyerPop donehand={chiledFun1} />
                </div>
              )}
            </div>
            <div id="popup" className="col-lg-6 col-md-6 position-relative">
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
            <div id="popup" className="col-lg-3 col-md-4 position-relative">
              <div className="input-form" onClick={clickHandeller2}>
                <span>{contantC}</span>
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
            <div id="popup" className="col-lg-3 col-md-4 position-relative">
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
            <div id="popup" className="col-lg-3 col-md-4 position-relative">
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
            <div id="popup" className="col-lg-3 col-md-6 position-relative">
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
            <div className="col-lg-3 col-md-6 ">
              <div className="input-form color-gre">
                <Link to="/searchpage" className="link-search">
                  ابحث
                </Link>
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
