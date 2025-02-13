import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import About from './Components/About';
import Services from './Components/Common/Services';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Layout />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/service-us" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
