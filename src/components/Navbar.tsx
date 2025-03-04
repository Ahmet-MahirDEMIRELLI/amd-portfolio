import mainImage from '../assets/amd.png'
import '../styles/Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const getActiveClass = (path: string) => {
    return location.pathname === path ? 'active' : '';
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const goToHome = () => {
    navigate('/');
    setMenuOpen(false);
  }

  return (
    <>
      <div className="navbar-page-container">
        <div className="navbar">
          <div className="image" onClick={goToHome}>
            <img src={mainImage} alt="Logo" height="50" width="50" />
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {menuOpen ? <X size={32} color="white" /> : <Menu size={32} color="white" />}
          </div>

          <div className={`titles ${menuOpen ? 'open' : ''}`}>
            <Link to="/" className={getActiveClass('/')} onClick={() => setMenuOpen(false)}><h4>Ana Sayfa</h4></Link>
            <Link to="/experience" className={getActiveClass('/experience')} onClick={() => setMenuOpen(false)}><h4>Deneyim</h4></Link>
            <Link to="/projects" className={getActiveClass('/projects')} onClick={() => setMenuOpen(false)}><h4>Projeler</h4></Link>
            <Link to="/certificates" className={getActiveClass('/certificates')} onClick={() => setMenuOpen(false)}><h4>Sertifikalar</h4></Link>
            <Link to="/contact-info" className={getActiveClass('/contact-info')} onClick={() => setMenuOpen(false)}><h4>İletişim Bilgileri</h4></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
