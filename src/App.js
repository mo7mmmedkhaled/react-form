// import { Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import FormCard from './components/FormCard/FormCard';

function App() {
  return (
    <div className="container-fluid">
      <FormCard />
      {/* <div className="row">
        <h1 className="p-3 m-3 text-center">الأكثر بحثاً في مصر</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-1 text-center">
          <NavLink className="text-center" to="/">
            للبيع
          </NavLink>
        </div>
        <div className="col-1 text-center">
          <Link className="text-center" to="/">
            للايجار
          </Link>
        </div>
      </div>
      <Routes>
        <Route></Route>
      </Routes> */}
    </div>
  );
}

export default App;
