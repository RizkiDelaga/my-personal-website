import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DaftarPahlawanIndonesia from './pages/Projects/PahlawanIndonesia/DaftarPahlawanIndonesia';
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/DaftarPahlawanIndonesia" element={<DaftarPahlawanIndonesia />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
