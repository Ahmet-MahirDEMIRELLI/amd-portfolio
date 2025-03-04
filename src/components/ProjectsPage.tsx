import '../styles/ProjectsPage.css'
import ytuChessRobot from '../assets/ytu-chess-robot.png'
import demirelliRentCar from '../assets/demirelli-rent-car.png'

function ProjectsPage() {
  return (
    <>
        <div className="projects-page-container">
            <div className="two-card-row first-row">
                <div className="card">
                    <img src={ytuChessRobot} alt="Logo" height="200" width="200" />
                    <div className="explanation">
                        <div className="title">
                            <h3>YTÜ Satranç Robotu</h3>
                        </div>
                        <p>* Frontend, backend ve tahta algoritması ekibinde görev alıyorum.</p>
                        <p>* Kodları incelemek için <a href="https://github.com/YTU-Satranc-Kulubu" target="_blank">YTÜ Satranç Robotu</a>'na göz atabilirsiniz</p>
                    </div>          
                </div>
                <div className="card">
                    <img src={demirelliRentCar} alt="Logo" height="170" width="170" />
                    <div className="explanation">
                        <div className="title">
                            <h3>Demirelli Rent Car</h3>
                        </div>
                        <p>* Staj projem olarak tamamladım.</p>
                        <p>* Elden teslim araç kiralama işlemi yapan bir işletmenin işini görecek bir sistem kodladım.</p>
                        <p>* Kullanılan Teknolojiler: Angular, .Net ve MsSQL</p>
                    </div>          
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectsPage
