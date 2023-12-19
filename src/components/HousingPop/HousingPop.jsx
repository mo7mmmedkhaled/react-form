import React, { useState } from 'react';

const HousingPop = (props) => {
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
  const items2 = [
    'شقه',
    'تاون هاوس',
    'فيلا',
    'توين هاوس',
    'دوبلكس',
    'غرفه',
    'بنتهاوس',
    'عقارات سكنية',
    'شاليه',
  ];

  const items = [
    'مكتب',
    'مطعم وكافيه',
    'مجمع تجاري',
    'محلات تجاريه',
    'مستودع',
    'عقارات تجاريه',
    'عياده',
    'زراعي',
    'مصنع',
    'صناعي',
    'جراج',
  ];

  return (
    <div className="container">
      <div className="row check-div">
        <span className="col-6">
          <button
            type="button"
            class={toggle ? 'buttn' : 'active-buttn'}
            onClick={() => setToogle(false)}
          >
            سكني
          </button>
        </span>
        <span className="col-6">
          <button
            type="button"
            class={toggle ? 'active-buttn' : 'buttn'}
            onClick={() => setToogle(true)}
          >
            تجاري
          </button>
        </span>
      </div>
      {!toggle && (
        <>
          <div className="row">
            <ul className="all-list">
              {items2.map((item, index) => (
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
      {toggle && (
        <>
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

export default HousingPop;
