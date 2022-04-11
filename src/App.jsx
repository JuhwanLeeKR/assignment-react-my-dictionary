import './App.css';
import 'nes.css/css/nes.min.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/UI/Header';
import InputWord from './components/UI/InputWord';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='add' element={<InputWord />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
