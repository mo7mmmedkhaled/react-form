import React, { useState } from 'react';
import '../DistancePop/DistancePop.css';

const PricePop = (props) => {
  const [inp1, setInp1] = useState(null);
  const [inp2, setInp2] = useState(null);

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
      <div className="row check-div">
        <span className="col-6">أقل سعر</span>
        <span className="col-6">أعلى سعر</span>
      </div>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="inp"
            placeholder="أقل سعر"
            id="message"
            name="أقل سعر"
            onChange={handleChange1}
            value={inp1}
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="inp"
            placeholder="أعلى سعر"
            id="message"
            name="أعلى سعر"
            onChange={handleChange2}
            value={inp2}
          />
        </div>
      </div>
      <div className="row">
        <button className="col-6 btn btn-outline-success p-3" type="button">
          إعادة ظبط
        </button>
        <button
          type="button"
          className="col-6 btn btn-success p-3"
          onClick={DoneHandeller}
        >
          تم
        </button>
      </div>
    </div>
  );
};

export default PricePop;
