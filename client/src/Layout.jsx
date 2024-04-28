import React , { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  const [mode, setMode] = useState('light');

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }
  return (
    <>
    <Header mode={mode} toggleColorMode={toggleColorMode}/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout