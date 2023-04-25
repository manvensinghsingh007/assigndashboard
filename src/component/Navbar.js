import React, { useState } from 'react'
import logo from './logo.JPG'

function Navbar() {
  const [toggle,setToggle] = useState(false);

  return (
    <div class="shadow-md h-15 flex flex-row justify-between px-10 py-4 items-center relative" >
      <h2 class="font-bold font-xl">KNOWLEDGE</h2>
      <div class="flex flex-row gap-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-base py-1 px-4">
          CREATE COURSE
        </button>
        <avatar class="" onClick={()=>setToggle(!toggle)}>
          
          <img type="button" class="w-7 h-7 rounded-full cursor-pointer" src={logo} alt="User dropdown" onClick={()=>setToggle(!toggle)}/>
            { 
              toggle &&
              <div class="absolute right-10 mr-50 z-10 bg-white rounded-lg shadow">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bob Green</div>
                  <div class="font-medium truncate">bob@xyz.com</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton" >
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Settings</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Sign Out</a>
                  </li>
                </ul>
              </div>
              }
        </avatar>
      </div>
    </div>
  )
}

export default Navbar