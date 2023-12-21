import React, { useState } from 'react';
import FormCard from '../components/FormCard/FormCard';
import ForRent from '../components/Components/ForRent';
import ForSell from '../components/Components/ForSell';

const StartPage = () => {
  const [route, setRoute] = useState(true);

  const buyHandeller = () => {
    setRoute(true);
  };
  const sellHandeller = () => {
    setRoute(false);
  };
  return (
    <div className="container-fluid">
      <FormCard />
      <div className="row">
        <h1 className="mt-5 mb-5 text-center">الأكثر بحثاً في مصر</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-1 text-center">
          <button
            className={`text-center link-route ${route && 'active'}`}
            onClick={buyHandeller}
          >
            للبيع
          </button>
        </div>
        <div className="col-1 text-center">
          <button
            className={`text-center link-route ${!route && 'active'}`}
            onClick={sellHandeller}
          >
            للايجار
          </button>
        </div>
      </div>
      {route ? <ForSell /> : <ForRent />}
    </div>
  );
};

export default StartPage;
