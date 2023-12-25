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
import { data } from '../../assets/dataSearchValue';

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
  const [inputToogle, setnputToogle] = useState(true);

  // useEffect(() => {
  //   // Attach click event listener to the document
  //   document.addEventListener('click', handleDocumentClick);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('key1', contantA);
  // }, [contantA]);

  const clickHandeller1 = () => {
    setToogle(!toogle1);
    setToogleA(false);
    setToogleB(false);
    setToogleC(false);
    setToogleD(false);
    setnputToogle(false);
  };

  const clickHandeller2 = () => {
    setToogleA(!toogle2);
    setToogle(false);
    setToogleB(false);
    setToogleC(false);
    setToogleD(false);
    setnputToogle(false);
  };
  const clickHandeller3 = () => {
    setToogleB(!toogle3);
    setToogle(false);
    setToogleA(false);
    setToogleC(false);
    setToogleD(false);
    setnputToogle(false);
  };
  const clickHandeller4 = () => {
    setToogleC(!toogle4);
    setToogle(false);
    setToogleA(false);
    setToogleB(false);
    setToogleD(false);
    setnputToogle(false);
  };
  const clickHandeller5 = () => {
    setToogleD(!toogle5);
    setToogle(false);
    setToogleA(false);
    setToogleB(false);
    setToogleC(false);
    setnputToogle(false);
  };

  const clickHandeller6 = () => {
    setToogleD(false);
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
      setContentA(item3.join(' - '));
    } else {
      return;
    }
  };
  const DestanceFun = (item4, item5) => {
    if (item4 && item5) {
      setToogleC(false);
      setContentB(
        `${item4} '\u0645\u062A\u0631 \u0645\u0631\u0628\u0639' - ${item5} '\u0645\u062A\u0631 \u0645\u0631\u0628\u0639'`
      );
    } else {
      return;
    }
  };
  const priceFun = (item6, item7) => {
    if (item6 && item7) {
      setToogleD(false);
      setContentD(`${item6} "ج.م" - ${item7} "ج.م"`);
    } else {
      return;
    }
  };

  // const handleDocumentClick = (event) => {};

  const locationHandeller = (event) => {
    setInputValue(event.target.innerHTML);
    setnputToogle(!inputToogle);
  };

  const submitForm = () => {
    postData();
  };

  const postData = async () => {
    const firebaseUrl =
      'https://react-form-training-project-default-rtdb.firebaseio.com/your-Data.json';
    const data = {
      key1: contantE,
      key2: inputvalue,
      key3: contantC,
      key5: contantA,
      key6: contantB,
      key7: contantD,
      // Add more key-value pairs as needed
    };

    try {
      const response = await fetch(firebaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success, e.g., update state, show a success message, etc.
      console.log('Data successfully posted to Firebase!');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error posting data to Firebase:', error.message);
    }
  };

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
                <div className="popup-fig-right closedPopUp">
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
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setnputToogle(true);
                    }}
                    onClick={clickHandeller6}
                    value={inputvalue}
                  />
                </span>
                <MdLocationOn className="icon" />
              </div>
              {inputvalue && inputToogle && (
                <div className="popup-fig-right-special col-12 closedPopUp">
                  {
                    <ul>
                      {data
                        .filter((item) => item.startsWith(inputvalue))
                        .map((item, index) => (
                          <li key={index} onClick={locationHandeller}>
                            {item}
                          </li>
                        ))}
                    </ul>
                  }
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
                <div className="popup-fig-left closedPopUp">
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
                <div className="popup-fig-right closedPopUp">
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
                <div className="popup-fig-right-special closedPopUp">
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
                <div className="popup-fig-right-special closedPopUp">
                  <PricePop donehand={priceFun} />
                </div>
              )}
            </div>
            <div className="col-lg-3 col-md-6 ">
              <div className="input-form color-gre">
                <Link
                  to="/searchpage"
                  className="link-search"
                  onClick={submitForm}
                >
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
