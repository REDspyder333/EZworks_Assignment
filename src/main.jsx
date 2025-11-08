// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import FilmProductionPage from './pages/FilmProductionPage.jsx';
import BrandingPage from './pages/BrandingPage.jsx';
import ArtCurationPage from './pages/ArtCurationPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/film-production" element={<FilmProductionPage />} />
        <Route path="/branding" element={<BrandingPage />} />
        <Route path="/art-curation" element={<ArtCurationPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);