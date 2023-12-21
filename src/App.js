import React from 'react';
import './App.css';

import Blog from './pages/blog'
import Navbar from './components/shared/Navbar';

function App() {
  return (
   <>
    <Navbar />
    <div className='container'>
      <Blog />
    </div>
   </>
  );
}

export default App;
