import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchPage from './pages/SearchPage';
import StartPage from './pages/StartPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/searchpage" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
