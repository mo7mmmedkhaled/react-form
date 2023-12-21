import { useState } from 'react';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import BuyerPop from '../../BuyerPop/BuyerPop';
import HousingPop from '../../HousingPop/HousingPop';
import CountRoomPop from '../../CountRoomPop/CountRoomPop';
import DistancePop from '../../DistancePop/DistancePop';
import PricePop from '../../PricePop/PricePop';
import './SearchBar.css';

const SearchBar = () => {
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

  return (
    <div className="container">
      <div className="row">
        <div id="popup" className="col-lg-1 position-relative">
          <div className="button-1" onClick={clickHandeller1}>
            <span>{contantE}</span>
            {toogle1 ? (
              <BsCaretUpFill className="icon-2" />
            ) : (
              <BsCaretDownFill className="icon-2" />
            )}
          </div>
          {toogle1 && (
            <div className="popup-right">
              <BuyerPop donehand={chiledFun1} />
            </div>
          )}
        </div>
        <div id="popup" className="col-2 position-relative">
          <div className="button-1">
            <span>
              <input
                type="text"
                placeholder="أدخل الموقع"
                className="location-input"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputvalue}
              />
            </span>
            <MdLocationOn className="icon-2" />
          </div>
          {inputvalue && (
            <div className="popup-fig-right-special col-12">{inputvalue}</div>
          )}
        </div>
        <div id="popup" className="col-2 position-relative">
          <div className="button-1" onClick={clickHandeller2}>
            <span>{contantC}</span>
            {toogle2 ? (
              <BsCaretUpFill className="icon-2" />
            ) : (
              <BsCaretDownFill className="icon-2" />
            )}
          </div>
          {toogle2 && (
            <div className="popup-left">
              <HousingPop donehand={chiledFun} />
            </div>
          )}
        </div>
        <div id="popup" className="col-2 position-relative">
          <div className="button-1" onClick={clickHandeller3}>
            <span>{contantA}</span>
            {toogle3 ? (
              <BsCaretUpFill className="icon-2" />
            ) : (
              <BsCaretDownFill className="icon-2" />
            )}
          </div>
          {toogle3 && (
            <div className="popup-left">
              <CountRoomPop donehand={chiledFun2} />
            </div>
          )}
        </div>
        <div id="popup" className="col-2 position-relative">
          <div className="button-1" onClick={clickHandeller4}>
            <span>{contantB}</span>
            {toogle4 ? (
              <BsCaretUpFill className="icon-2" />
            ) : (
              <BsCaretDownFill className="icon-2" />
            )}
          </div>
          {toogle4 && (
            <div className="popup-right-special">
              <DistancePop donehand={DestanceFun} />
            </div>
          )}
        </div>
        <div id="popup" className="col-2 position-relative">
          <div className="button-1" onClick={clickHandeller5}>
            <span>{contantD}</span>
            {toogle5 ? (
              <BsCaretUpFill className="icon-2" />
            ) : (
              <BsCaretDownFill className="icon-2" />
            )}
          </div>
          {toogle5 && (
            <div className="popup-right-special">
              <PricePop donehand={priceFun} />
            </div>
          )}
        </div>
        <div className="col-1">
          <div className="button-1 color-gre">
            <a href="/searchpage" className="link-search-search">
              حفظ البحث
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
