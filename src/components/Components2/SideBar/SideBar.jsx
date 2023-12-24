import React, { useState } from 'react';
import './SideBar.css';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

const all_Address = [
  { id: 1, title: 'عقارات استوديو للبيع في مَصر', num: 42.889 },
  { id: 2, title: 'عقارات 1 غرفة نوم للبيع في مَصر', num: 1.809 },
  { id: 3, title: 'عقارات 2 غرفة نوم للبيع في مَصر', num: 1 },
  { id: 4, title: 'عقارات 3 غرف نوم للبيع في مَصر', num: 747 },
  { id: 5, title: 'عقارات 5 غرف نوم للبيع في مَصر', num: 1 },
  { id: 6, title: 'عقارات 6 غرف نوم للبيع في مَصر', num: 1 },
  { id: 7, title: 'عقارات 7 غرف نوم للبيع في مَصر', num: 16.214 },
  { id: 8, title: 'عقارات 8 غرف نوم للبيع في مَصر', num: 8 },
  { id: 9, title: 'عقارات 9 غرف نوم للبيع في مَصر', num: 7 },
];

const SideBar = () => {
  const [moreAdd, setMoreAdd] = useState(false);

  const moreHandeller = () => {
    setMoreAdd(!moreAdd);
    console.log(moreAdd);
  };

  return (
    <div className="col-12 pe-5">
      <div className="col-12">
        <div className="card-title">
          <span className="title">نتائج مقترحة</span>
        </div>
        <ul>
          {all_Address.map((item, index) => {
            if (!moreAdd && item.id <= 4) {
              return (
                <li key={index}>
                  <a href="/">{item.title}</a>
                </li>
              );
            } else if (moreAdd) {
              return (
                <li key={index}>
                  <a href="/">{item.title}</a>
                </li>
              ); // or you can omit this line, as returning null won't render anything
            }
            return null;
          })}
        </ul>
        <div className="col-12">
          <div onClick={moreHandeller} className="more-content">
            {!moreAdd ? 'عرض المزيد' : 'عرض أقل'}
            <span>{moreAdd ? <BsCaretUpFill /> : <BsCaretDownFill />}</span>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card-title">
          <span className="title">روابط مفيدة</span>
        </div>
        <ul>
          <li>
            <a href="/">عقارات للايجار في مَصر</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
