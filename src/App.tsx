
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='navbar-container'>
        <Navbar/>
      </div>

      <div className='content-container'>
        <Outlet />
      </div>
      
      <div className='footer-container'>
        <Footer/>
      </div>
    </>
  )
}

export default App
