import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    /*  everything inside outlet is dynamic that get rendered keeping the header and footer intact that means that header and footer is not render again n again for every comp*/ 
  return (
    <>
    <Header />
    <Outlet />   
    <Footer />
    </>
  )
}

export default Layout