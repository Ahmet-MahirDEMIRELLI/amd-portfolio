import mainImage from '../assets/amd.png'
import '../styles/Navbar.css'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation(); // Aktif URL'yi alır

  const getActiveClass = (path: string) => {
    return location.pathname === path ? 'active' : '';
  }

  return (
    <>
      <div className="navbar-page-container">
        <div className="navbar">
          <div className="image">
            <img src={mainImage} alt="Logo" height="50" width="50" />
          </div>
          <div className="titles">
            <Link to="/" className={getActiveClass('/')}><h4>Ana Sayfa</h4></Link>
            <Link to="/experience" className={getActiveClass('/experience')}><h4>Deneyim</h4></Link>
            <Link to="/projects" className={getActiveClass('/projects')}><h4>Projeler</h4></Link>
            <Link to="/certificates" className={getActiveClass('/certificates')}><h4>Sertifikalar</h4></Link>
            <Link to="/contact-info" className={getActiveClass('/contact-info')}><h4>İletişim Bilgileri</h4></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
