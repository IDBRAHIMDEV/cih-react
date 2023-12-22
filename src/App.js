import React from 'react';
import './App.css';

import Blog from './pages/blog'
import Navbar from './components/shared/Navbar';
import Category from './pages/Category';
import Users from './pages/Users';

function App() {
  return (
   <>
    <Navbar />
    <div className='container'>
      <Users />
    </div>
   </>
  );
}

export default App;
