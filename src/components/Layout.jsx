import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { CustomLink } from './CustomLink'


const Layout = () => {
  return (
    <>
    <header>
    <nav>
     <CustomLink to="/">Home</CustomLink>
     <CustomLink to="/posts">Blog</CustomLink>
     <CustomLink to="/about">About</CustomLink>
    </nav>
   </header>

   <Outlet />
   <footer>fooooter</footer>
    </>
  )
}

export {Layout}