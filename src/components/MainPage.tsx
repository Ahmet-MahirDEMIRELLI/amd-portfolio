import '../styles/MainPage.css'
import MainPageImage from '../assets/main-page-img.png'

function MainPage() {
  return (
    <>
      <div className="main-main-container">
        <div className='image-container'>
          <img src={MainPageImage} alt="Logo"/>
        </div>
        <div className="message">
            <h1>Merhaba, ben Ahmet Mahir Demirelli 👋</h1>
            <h3>🎓 Yıldız Teknik Üniversitesinde 4. sınıf Bilgisayar Mühendisliği öğrencisiyim.</h3>
            <h3>🌐 Aktif olarak <a href="https://github.com/YTU-Satranc-Kulubu" target="_blank">YTÜ Satranç Robotu</a> projesinde Backend, Frontend ve Algoritma Geliştirme ekibinde rol alıyorum.</h3>
        </div>
      </div>
    </>
  )
}

export default MainPage
