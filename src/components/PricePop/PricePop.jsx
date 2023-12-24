import React, { useState } from 'react';
import '../DistancePop/DistancePop.css';

const PricePop = (props) => {
  const [inp1, setInp1] = useState('');
  const [inp2, setInp2] = useState('');

  const DoneHandeller = () => {
    props.donehand(inp1, inp2);
  };

  const handleChange1 = (e) => {
    setInp1(e.target.value);
  };
  const handleChange2 = (e) => {
    setInp2(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <span className="col-6 title-cont">أقل سعر</span>
        <span className="col-6 title-cont">أعلى سعر</span>
      </div>
      <div className="row">
        <div className="col-6">
          <input
            type="number"
            className="inp"
            placeholder="أقل سعر"
            id="message"
            name="أقل سعر"
            onChange={handleChange1}
            value={inp1}
            min="100000"
          />
        </div>
        <div className="col-6">
          <input
            type="number"
            className="inp"
            placeholder="أعلى سعر"
            id="message"
            name="أعلى سعر"
            onChange={handleChange2}
            value={inp2}
            max="100000000"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button className="btn btn-outline-success p-2" type="button">
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

export default PricePop;
