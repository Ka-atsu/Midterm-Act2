import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageComponent from './Components/HomePageComponent';
import AboutPageComponent from './Components/AboutPageComponent';
import SkillsPageComponent from './Components/SkillsPageComponent';
import ContactPageComponent from './Components/ContactPageComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
return (
  <BrowserRouter>
    <div>
      <Routes>
        <Route exact path="/" element={<HomePageComponent />} />
        <Route path="/about" element={<AboutPageComponent />} />
        <Route path="/skills" element={<SkillsPageComponent />} />
        <Route path="/contact" element={<ContactPageComponent />} />
      </Routes>
    </div>
  </BrowserRouter>
);
}
export default App;