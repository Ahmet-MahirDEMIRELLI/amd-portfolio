import '../styles/MainPage.css'
import MainPageImage from '../assets/main-page-img.png'

function MainPage() {
  return (
    <>
      <div className="main-page-container">
        <div className='image-container'>
          <img src={MainPageImage} alt="Logo"/>
        </div>
        <div className="messages-container">
            <h1>Merhaba, ben Ahmet Mahir Demirelli 👋</h1>
            <h3>🎓 Yıldız Teknik Üniversitesinde 4. sınıf Bilgisayar Mühendisliği öğrencisiyim.</h3>
            <h3>🌐 Web geliştirme ile ilgileniyorum.</h3>
        </div>
      </div>
    </>
  )
}

export default MainPage
