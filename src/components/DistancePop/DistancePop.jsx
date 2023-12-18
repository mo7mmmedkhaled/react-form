import React, { useState } from "react";
import "./DistancePop.css";

const DistancePop = (props) => {
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
      <div className="row">
        <span className="col-6 title-cont">الحد الأدنى متر مربع</span>
        <span className="col-6 title-cont">الحد الأعلى متر مربع</span>
      </div>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="inp"
            placeholder="أقل مساحة"
            id="message"
            name="أقل مساحة"
            onChange={handleChange1}
            value={inp1}
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="inp"
            placeholder="أكبر مساحة"
            id="message"
            name="أكبر مساحة"
            onChange={handleChange2}
            value={inp2}
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

export default DistancePop;
