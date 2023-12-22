import React from 'react';
import './App.css';

import Blog from './pages/blog'
import Navbar from './components/shared/Navbar';
import Category from './pages/Category';

function App() {
  return (
   <>
    <Navbar />
    <div className='container'>
      <Category />
    </div>
   </>
  );
}

export default App;
