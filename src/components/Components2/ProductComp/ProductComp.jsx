import React from 'react';
import './ProductComp.css';
import img1 from '../../../assets/img1.jpg';
import { MdLocationOn } from 'react-icons/md';

const ProductComp = () => {
  return (
    <div className="col-8 main-card">
      <div className="row">
        <div className="col-5 p-0">
          <img src={img1} alt="" className="w-100" />
        </div>
        <div className="col-7 secondry-card">
          <div>
            <span>8,500,000</span>
            <span>ج.م</span>
          </div>
          <div>
            <div>
              <span>شقة</span>
              <span>المساحة : 166 متر مربع</span>
            </div>
            <h4>
              شقه 166م دور اول للبيع تاج سيتى تقسيط 8 سنوات التجمع Taj City
            </h4>
            <div className="d-flex align-items-center">
              <MdLocationOn className="icon-2" />
              <div class="_00a37089">تاج سيتي، القاهرة الجديدة، القاهرة</div>
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
