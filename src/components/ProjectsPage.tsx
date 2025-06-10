import '../styles/ProjectsPage.css'
import ytuLogo from '../assets/ytu-logo.png'
import ytuChessRobot from '../assets/ytu-chess-robot.png'
import demirelliRentCar from '../assets/demirelli-rent-car.png'
import ekm from '../assets/ekm.png'
import messagingApp from '../assets/messaging-app.png'

function ProjectsPage() {
  return (
    <>
        <div className="projects-page-container">
            <div className="two-card-row first-row">
                <div className="card">
                    <div className="status-badge" data-tooltip="Devam Ediyor">🚧</div>
                    <div className="badge">1</div>
                    <div className="title">
                        <h3>Proje Koordinatörlüğü Süreç Kontrol ve Mail Sistemi</h3>
                    </div>
                    <img src={ytuLogo} alt="Logo"/>
                    <div className="explanation">
                        <p>* Bu projeyi Bilgisayar Projesi dersim kapsamında yapıyorum.</p>
                        <p>* Projenin amacı YTÜ BM bölümünde verilen Bilgisayar Projesi ve Bitirme Çalışması derslerinin daha kolay yönetilmesi için web tabanlı bir sistem geliştirmek.</p>
                    </div>          
                </div>
                <div className="card">
                    <div className="status-badge" data-tooltip="Tamamlandı">✅</div>
                    <div className="badge">2</div>
                    <div className="title">
                        <h3>Etüt ve Koçluk Merkezi</h3>
                    </div>
                    <img src={ekm} alt="Logo"/>
                    <div className="explanation">
                        <p>* Projemizi Çevik Yaklaşımlarla Yazılım Geliştirme dersi kapsamında hocamız <a href="https://www.linkedin.com/in/seyhan-amasyali/" target="_blank">Seyhan Amasyalı</a> ile yürüttük.</p>
                        <p>* Bu proje sayesinde Jira ve Miro gibi araçları kullanarak Agile yaklaşım ile proje geliştirmeyi deneyimledim.</p>
                        <p>* Kodları incelemek için <a href="https://github.com/Agile-Victims/EKM" target="_blank">Agile-Victims</a>'a göz atabilirsiniz</p>
                    </div>          
                </div>
            </div>
            <div className="two-card-row">
                <div className="card">
                    <div className="status-badge" data-tooltip="Tamamlandı">✅</div>
                    <div className="badge">3</div>
                    <div className="title">
                        <h3>Demirelli Rent Car</h3>
                    </div>
                    <img src={demirelliRentCar} alt="Logo"/>
                    <div className="explanation">
                        <p>* Staj projem olarak tamamladım.</p>
                        <p>* Elden teslim araç kiralama işlemi yapan bir işletmenin işini görecek bir sistem kodladım.</p>
                        <p>* Kullanılan Teknolojiler: Angular, .Net ve MsSQL</p>
                    </div>          
                </div>
                <div className="card">
                    <div className="status-badge" data-tooltip="Devam Ediyor">🚧</div>
                    <div className="badge">4</div>
                    <div className="title">
                        <h3>Mesajlaşma Uygulaması</h3>
                    </div>
                    <img src={messagingApp} alt="Logo"/>
                    <div className="explanation">
                        <p>* Flutter ve .Net kullanarak geliştiriyorum.</p>
                        <p>* Projenin amacı kişilerin bilgi güvenliğini sağlayacak, asimetrik şifreleme yöntemleri kullanarak blockchain mantığı ile çalışan bir mesajlaşma uygulaması yapmak.</p>
                        <p>* Kodları incelemek için <a href="https://github.com/Ahmet-MahirDEMIRELLI/messaging_app" target="_blank">Frontend</a> ve <a href="https://github.com/Ahmet-MahirDEMIRELLI/MessagingApp.Server" target="_blank">Backend</a> repository'lerine göz atabilirsiniz.</p>
                    </div>          
                </div>         
            </div>
            <div className="two-card-row">
                <div className="card">
                    <div className="status-badge" data-tooltip="Devam Ediyor">🚧</div>
                    <div className="badge">5</div>
                    <div className="title">
                        <h3>YTÜ Satranç Robotu</h3>
                    </div>
                    <img src={ytuChessRobot} alt="Logo"/>
                    <div className="explanation">
                        <p>* Frontend ve backend ekibinde görev alıyorum.</p>
                        <p>* Kodları incelemek için <a href="https://github.com/YTU-Satranc-Kulubu" target="_blank">YTÜ Satranç Robotu</a>'na göz atabilirsiniz</p>
                    </div>          
                </div>
                
            </div>
        </div>
    </>
  )
}

export default ProjectsPage
