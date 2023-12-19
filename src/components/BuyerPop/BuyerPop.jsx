import React, { useState } from 'react';
import './BuyerPop.css';

const BuyerPop = (props) => {
  const [toggle, setToogle] = useState(false);
  const [select, setSelect] = useState(null);
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (item, index) => {
    setActiveItem(index);
    setSelect(item);
  };
  const DoneHandeller = () => {
    props.donehand(select);
  };
  const items = ['سنويا', 'شهريا', 'اسبوعيا', 'يوميا', 'الجميع'];

  return (
    <div className="container">
      <div className="row">
        <span className="title-cont">نوع العرض</span>
      </div>
      <div className="row check-div">
        <span className="col-6">
          <button
            type="button"
            className={toggle ? 'buttn' : 'active-buttn'}
            onClick={() => setToogle(false)}
          >
            للبيع
          </button>
        </span>
        <span className="col-6">
          <button
            type="button"
            className={toggle ? 'active-buttn' : 'buttn'}
            onClick={() => setToogle(true)}
          >
            للإيجار
          </button>
        </span>
      </div>
      {toggle && (
        <>
          <div className="row">
            <span className="title-cont">مدة الإيجار</span>
          </div>
          <div className="row">
            <ul className="all-list">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`sinle-Item ${
                    index === activeItem ? 'active-chose' : ''
                  }`}
                  onClick={() => handleItemClick(item, index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <div className="row">
        <div className="col-6">
          <button
            className="btn btn-outline-success p-2"
            type="button"
            onClick={() => setToogle(false)}
          >
            إعادة ظبط
          </button>
        </div>
        <div className="col-6">
          <button
            type="button"
            className="btn btn-success p-2"
            onClick={DoneHandeller}
          >
            تم
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyerPop;
