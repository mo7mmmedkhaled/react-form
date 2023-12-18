import React, { useState } from "react";

const CountRoomPop = (props) => {
  const [select, setSelect] = useState(null);
  const [activeItem, setActiveItem] = useState();

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    setSelect(item.name);
  };
  const DoneHandeller = () => {
    props.donehand(select);
  };
  const items2 = [
    { id: 8, name: "استوديو" },
    { id: 9, name: "1" },
    { id: 10, name: "2" },
    { id: 11, name: "3" },
    { id: 12, name: "4" },
    { id: 13, name: "5" },
    { id: 14, name: "6" },
    { id: 15, name: "+7" },
  ];

  const items = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
    { id: 6, name: "+6" },
  ];

  return (
    <div className="container">
      <div className="row">
        <span className="col-6 title-cont">عدد الغرف</span>
        <div className="row">
          <ul className="all-list">
            {items2.map((item, index) => (
              <li
                key={index}
                className={`sinle-Item ${
                  item.id === activeItem ? "active" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <span className="col-6 title-cont">عدد الحمامات</span>
        <div className="row">
          <ul className="all-list">
            {items.map((item, index) => (
              <li
                key={index}
                className={`sinle-Item ${
                  item.id === activeItem ? "active" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button
            className="btn btn-outline-success p-2"
            type="button"
            onClick={() => setActiveItem()}
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

export default CountRoomPop;
