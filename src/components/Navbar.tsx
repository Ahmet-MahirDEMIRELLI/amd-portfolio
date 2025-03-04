import mainImage from '../assets/amd.png'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
        <div className="navbar-main-container">
            <div className="navbar">
                <div className="image">
                    <img src={mainImage} alt="Logo" height="50" width="50" />
                </div>
                <div className="titles">
                    <h4>Ana Sayfa</h4>
                    <h4>Deneyim</h4>
                    <h4>Projeler</h4>
                    <h4>Sertifikalar</h4>
                    <h4>İletişim Bilgileri</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
