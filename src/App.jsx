import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Navbar from './components/Navbar';

import Home from './pages/Home';

const App = () => {
  return (
    <div className="sm:-8 relative flex min-h-screen flex-row bg-[#13131a] p-4">
      <div className="hidded relative mr-10 hidden sm:flex">
        <SideBar />
      </div>

      <div className='mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:p-5 '>
        <Navbar />
        <Routes>
          <Route path ='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;