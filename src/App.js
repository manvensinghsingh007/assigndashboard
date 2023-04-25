import React from 'react';
import './App.css';
import SidebarComp from './component/SidebarComp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Knowledge from './pages/Knowledge';

function App() {
  return (
    <BrowserRouter>
    <div class="flex flex-row">
      <div class="flex-initial">
        <SidebarComp />
      </div>
        <div class="inset-y-0 pl-64 w-full">
            <Navbar />
            <Routes>  
            <Route path='/' element={<Knowledge />}  />
          </Routes>
        </div >
    </div>
    </BrowserRouter>
  )
}

export default App;
