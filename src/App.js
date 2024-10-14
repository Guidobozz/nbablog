// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import './App.css';
import Footer from './footer/footer';
import CategoryPage from './itemcontainer/categorypage';
import ArticlePage from './itemcontainer/articlepage';
import NewCard from './itemcontainer/newcard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<NewCard />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/article/:id" element={<ArticlePage />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
