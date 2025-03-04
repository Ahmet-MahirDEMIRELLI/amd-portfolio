import '../styles/ExperiencePage.css'
import atp from '../assets/atp-digital.png'
import skysec from '../assets/skysec.png'
import weblab from '../assets/weblab.png'

function ExperiencePage() {
  return (
    <>
        <div className="experience-page-container">
            <div className="work">
                <h1 className="experience-title">Deneyim</h1>
                <div className="two-card-row">
                    <div className="card">
                        <h3 className="title">ATP Digital</h3>
                        <img src={atp} alt="Logo" height="50" width="100" />
                        <div className="explanation">
                            <p>* Ekip: Yazılım Geliştirme Ekibi</p>  
                            <p>* Rol: Stajyer</p>  
                            <p>* Tarih: 08/2024 - 09/2024</p>
                            <p>* Kullanılan Teknolojiler: Angular, .Net ve MsSQL</p> 
                        </div>    
                    </div>
                </div>
            </div>
            <div className="club">
                <h1 className="club-title">Kulüp</h1>
                <div className="two-card-row">
                    <div className="card">
                        <h3 className="title">SKYSEC</h3>
                        <img src={skysec} alt="Logo" height="100" width="100" />
                        <div className="explanation">
                            <p>* SKYLAB kulübünün siber güvenlik ekibi</p>  
                            <p>* Rol: Ekip Üyesi</p>  
                            <p>* Tarih: 10/2024 - Halen</p>
                        </div>    
                    </div>
                    <div className="card">
                        <h3 className="title">WEBLAB</h3>
                        <img src={weblab} alt="Logo" height="100" width="100" />
                        <div className="explanation">
                            <p>* SKYLAB kulübünün web ekibi</p>  
                            <p>* Rol: Ekip Üyesi</p>  
                            <p>* Tarih: 03/2025 - Halen</p>
                        </div>    
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default ExperiencePage
