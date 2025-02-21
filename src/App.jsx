import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import About from './Components/About';
import Services from './Components/Common/Services';
import ContactUs from './Components/ContactUs';
import TravelBlogs from './Components/TravelBlogs';
import TravelGallery from './Components/TravelGallery';
import Error404 from './Components/Common/error404';
import DomCategoryWisePackages from './Components/Domestic/DomCategoryWisePackages';
import IntCategoryWisePackages from './Components/International/IntCategoryWisePackages';
import Packages from './Components/Common/Packages';
import DetailsPackages from './Components/Common/DetailsPackages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/service-us" element={<Services />} />
        <Route path="/travel-blog" element={<TravelBlogs />} />
        <Route path="/travel-contact" element={<ContactUs />} />
        {/* <Route path="/domestic-packages" element={<Packages type="domestic" />} />
        <Route path="/international-packages" element={<Packages type="international" />} /> */}
        <Route path="/international/category/:category" element={<IntCategoryWisePackages />} />
        <Route path="/domestic/category/:category" element={<DomCategoryWisePackages />} />
        {/* <Route path="/domestic/category/:type/:city" element={<DomCategoryWisePackages />} /> */}

        <Route path="/packages/:type/:city" element={<Packages />} />
        <Route path="/packages/:type" element={<Packages />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:type/:subcategory_name" element={<Packages />} />
        <Route path="/details-packages" element={<DetailsPackages />} />
        <Route path="/travel-blogs" element={<TravelBlogs />} />
        <Route path="/travel-gallery" element={<TravelGallery />} />
        <Route path="/error-404" element={< Error404 />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
