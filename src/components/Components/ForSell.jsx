import React from 'react';
import './ForSell.css';

const ForSell = () => {
  return (
    <div>
      <div className="contain">
        <ul className="row">
          <li className="col-4">
            <a href="/" className="main-tag">
              شقق دبي
            </a>
            <ul className="secound-list">
              <li>تاج سيتي</li>
              <li>ماونتن فيو اى سيتي</li>
              <li>هايد بارك القاهرة الجديدة</li>
              <li>فيفث سكوير</li>
              <li>بالم هيلز القاهرة الجديدة</li>
              <li>جاليريا موون فالي</li>
              <li>سراى</li>
            </ul>
          </li>
          <li className="col-4">
            <a href="/" className="main-tag">
              شقق أبو ظبي
            </a>
            <ul className="secound-list">
              <li>الخمائل</li>
              <li>بيفرلى هيلز</li>
              <li>بيت الوطن</li>
              <li>فيلدج ويست</li>
              <li>ابراج زيد</li>
              <li>زايد ديونز</li>
              <li>دى جويا</li>
            </ul>
          </li>
          <li className="col-4 main-tag">
            شقق في إمارات أخرى
            <ul className="secound-list">
              <li>مدينتي</li>
              <li>المقصد</li>
              <li>بادية بالم هيلز</li>
              <li>البروج</li>
              <li>صن كابيتال</li>
            </ul>
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className="contain">
        <ul className="row">
          <li className="col-4">
            <a href="/" className="main-tag">
              فيلات الشيخ زايد
            </a>
            <ul className="secound-list">
              <li>هايد بارك القاهرة الجديدة</li>
              <li>دبي مارينا</li>
              <li>ستون بارك</li>
              <li>لايان</li>
              <li>ازار</li>
              <li>تاج سيتي</li>
            </ul>
          </li>
          <li className="col-4">
            <a href="/" className="main-tag">
              فيلات القاهرة الجديدة
            </a>
            <ul className="secound-list">
              <li>مدينتي</li>
              <li>المقصد</li>
              <li>بادية بالم هيلز</li>
              <li>البروج</li>
            </ul>
          </li>
          <li className="col-4 main-tag">
            فلل في إمارات أخرى
            <ul className="secound-list">
              <li>الربوة</li>
              <li>رويال سيتي</li>
              <li>بالم هيلز جولف اكستنشن</li>
              <li>الكارما 4</li>
              <li>كليوباترا سكوير</li>
              <li>اليجريا</li>
              <li>دبي مارينا</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForSell;
