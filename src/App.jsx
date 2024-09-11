import React from 'react'
import {Route, Routes,} from 'react-router-dom'

const App = () => {
  return (
    <div className='relative flex min-h-screen flex-row bg-[#13131a] p-4'>
        <div className='relative mr-10 hidden sm:flex '>

        {/* SideBar */}
        </div>
        
        <div className='mx-auto max-w-[1280px] flex-1 max-sm:w-full sm:p-5 '>
            {/* Navbar */}
        
        <Routes>
            <Route path='/' element={<div className='text-white'>adbhabhwhj</div>} />
        </Routes>
        </div>
        </div>
  )
}

export default App