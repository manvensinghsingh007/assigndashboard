import React, { useState } from 'react'
import logo from './logo.JPG'
import { NavLink } from 'react-router-dom'

function SidebarComp() {

  return (
    <div>
      <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-black flex flex-col justify-between">
            <ul class="space-y-1 text-sm">
              <div>
                <img src={logo} alt='logo' class="h-10 m-auto my-5"/>
              </div>
              <li>
                  <NavLink to='' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">home</span>
                    <span class="ml-3">DASHBOARD</span>
                  </NavLink>
              </li>
              <li>
                <NavLink to='/' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">school</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">KNOWLEDGE</span>
                  </NavLink>
              </li>
              <li>
                <NavLink to='' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">group</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">MEMBERS</span>
                  </NavLink>
              </li>
              <li>
                <NavLink to='' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">diversity_2</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">TEAMS</span>
                  </NavLink>
              </li>
              <li>
                <NavLink to='' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">lock</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">VAULTS</span>
                  </NavLink>
              </li>
              <li>
                <NavLink to='' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">chat</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">CHATS</span>
                  </NavLink>
              </li>
            </ul>
            <ul class="space-y-1 text-sm">
            <li>
                <NavLink to='' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">settings</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">SETTINGS </span>
                  </NavLink>
              </li>
              <li>
                <NavLink to='' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">apartment</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">COMPANY</span>
                  </NavLink>
              </li>
              <li>
                <NavLink to='' className="flex items-center p-2 text-white  hover:bg-gray-100/[0.2] active:bg-gray-100/[0.4] gap-4">
                    <span class="material-symbols-outlined">person</span>
                    <span class="flex-1 ml-3 whitespace-nowrap">MY PROFILE</span>
                  </NavLink>
              </li>
            </ul>
        </div>
      </aside>

    </div>
  )
}

export default SidebarComp