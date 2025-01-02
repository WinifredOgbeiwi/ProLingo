import React from 'react'
import Header from './components/layout/Header'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import { ROUTES } from './util'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Prices from './pages/Prices'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div className="bg-offwhite h-screen w-full flex flex-col ">
      <Header />
      <div className='flex-1 h-full'>
        <Routes>
          <Route path={ROUTES.HOME} component={<Home />} />
          <Route path={ROUTES.ABOUT} component={<About />} />
          <Route path={ROUTES.CONTACT} component={<Contact />} />
          <Route path={ROUTES.PRICES} component={<Prices />} />
          <Route path={ROUTES.SIGN_IN} component={<Login />} />
        </Routes>
      </div>
   <Footer/>
    </div>
  );
}

export default App