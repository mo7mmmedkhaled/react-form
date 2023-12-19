import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import FormCard from './components/FormCard/FormCard';
import ForSell from './components/Components/ForSell';
import ForRent from './components/Components/ForRent';

function App() {
  return (
    <div className="container-fluid">
      <FormCard />
      <div className="row">
        <h1 className="mt-5 mb-5 text-center">الأكثر بحثاً في مصر</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-1 text-center">
          <NavLink className="text-center link-route" to="/react-form">
            للبيع
          </NavLink>
        </div>
        <div className="col-1 text-center">
          <NavLink className="text-center link-route" to="/للإيجار">
            للايجار
          </NavLink>
        </div>
      </div>
      <Routes>
        <Route path="/react-form" element={<ForSell />}></Route>
        <Route path="/للإيجار" element={<ForRent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
