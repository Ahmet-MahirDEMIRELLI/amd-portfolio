import mainImage from '../assets/amd.png'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="navbar-page-container">
        <div className="navbar">
          <div className="image">
            <img src={mainImage} alt="Logo" height="50" width="50" />
          </div>
          <div className="titles">
            <Link to="/"><h4>Ana Sayfa</h4></Link>
            <Link to="/experience"><h4>Deneyim</h4></Link>
            <Link to="/projects"><h4>Projeler</h4></Link>
            <Link to="/certificates"><h4>Sertifikalar</h4></Link>
            <Link to="/contact-info"><h4>İletişim Bilgileri</h4></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
