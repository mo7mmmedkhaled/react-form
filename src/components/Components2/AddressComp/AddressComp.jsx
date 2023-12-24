import React, { useState } from 'react';
import './AddressComp.css';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

const all_Address = [
  { id: 1, title: 'القاهرة', num: 42.889 },
  { id: 2, title: 'الجيزة', num: 1.809 },
  { id: 3, title: 'مطروح', num: 1 },
  { id: 4, title: 'الإسكندرية', num: 747 },
  { id: 5, title: 'السويس', num: 1 },
  { id: 6, title: 'البحر الأحمر', num: 1 },
  { id: 7, title: 'المحله الكبري', num: 16.214 },
  { id: 8, title: 'جنوب سيناء', num: 8 },
  { id: 9, title: 'الوادي الجديد', num: 7 },
  { id: 10, title: 'كفر الشيخ', num: 1 },
  { id: 11, title: 'الفيوم', num: 127 },
  { id: 12, title: 'دمياط', num: 4.64 },
  { id: 13, title: 'بورسعيد', num: 1 },
  { id: 14, title: 'أسيوط', num: 44 },
  { id: 15, title: 'سوهاج', num: 85 },
  { id: 16, title: 'البحيرة', num: 1525 },
  { id: 17, title: 'الغربية', num: 200205 },
  { id: 18, title: 'أسوان', num: 2 },
];

const AddressComp = () => {
  const [moreAdd, setMoreAdd] = useState(false);

  const moreHandeller = () => {
    setMoreAdd(!moreAdd);
    console.log(moreAdd);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="card-add">
          {all_Address.map((item) => {
            if (!moreAdd && item.id <= 4) {
              return (
                <div className="col-lg-3" key={item.id}>
                  <a href="/" className="link-add">
                    {item.title}
                  </a>
                  <span className="">{`(${item.num})`}</span>
                </div>
              );
            } else if (moreAdd) {
              return (
                <div className="col-lg-3" key={item.id}>
                  <a href="/" className="link-add">
                    {item.title}
                  </a>
                  <span className="">{`(${item.num})`}</span>
                </div>
              );
            }
          })}
          <div className="col-12 list-add">
            <div onClick={moreHandeller} className="more-content">
              {!moreAdd ? 'عرض جميع المواقع' : 'عرض مواقع أقل'}
              <span>{moreAdd ? <BsCaretUpFill /> : <BsCaretDownFill />}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComp;
