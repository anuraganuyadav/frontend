import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import About from './Components/About';
import Services from './Components/Common/Services';
import ContactUs from './Components/ContactUs';
import InternationalPackages from './Components/International/InternationalPackages';
import TravelBlogs from './Components/TravelBlogs';
import TravelGallery from './Components/TravelGallery';
import Error404 from './Components/Common/error404';
import DomCategoryWisePackages from './Components/Domestic/DomCategoryWisePackages';
import IntCategoryWise from './Components/International/IntCategoryWisePackages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/service-us" element={<Services />} />
        <Route path="/travel-blog" element={<TravelBlogs />} />
        <Route path="/travel-contact" element={<ContactUs />} />
        <Route path="/international-packages" element={<InternationalPackages />} />
        <Route path="/international/category" element={<IntCategoryWise />} />
        <Route path="/domestic/category/:category" element={<DomCategoryWisePackages />} />

        <Route path="/travel-blogs" element={<TravelBlogs />} />
        <Route path="/travel-gallery" element={<TravelGallery />} />
        <Route path="/error-404" element={< Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
