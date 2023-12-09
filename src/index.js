import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';
import About from './components/about/about';
import NotFound from './components/not-found/not-found';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
