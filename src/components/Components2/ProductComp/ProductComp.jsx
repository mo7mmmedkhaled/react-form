import React from 'react';
import './ProductComp.css';
import img1 from '../../../assets/img1.jpg';
import { MdLocationOn } from 'react-icons/md';

const ProductComp = () => {
  return (
    <div className="col-12 main-card">
      <div className="row">
        <div className="col-5 p-0">
          <img src={img1} alt="" className="w-100" />
        </div>
        <div className="col-7 secondry-card">
          <div className="price-house">
            <span>8,500,000</span>
            <span> ج.م</span>
          </div>
          <div className="discription-house">
            <div className="aria-house">
              <span>
                مساحة <span>الشقة</span> : 166 متر مربع
              </span>
            </div>
            <h4 className="title-house">
              شقه 166م دور اول للبيع تاج سيتى تقسيط 8 سنوات التجمع Taj City
            </h4>
            <div className="d-flex align-items-center">
              <MdLocationOn className="icon-2" />
              <div className="loaction-product">
                تاج سيتي، القاهرة الجديدة، القاهرة
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <button className="btn btn-success">اتصل</button>
            </div>
            <div className="col-3">
              <button className="btn btn-success">الإيميل</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComp;
