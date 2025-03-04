import '../styles/CertificatesPage.css'
import udemy from '../assets/udemy.jpg'

function CertificatesPage() {
  return (
    <>
        <div className="certificates-page-container">
            <div className="two-card-row first-row">
                <div className="card">
                    <img src={udemy} alt="Logo" />
                    <div className="explanation">
                        <div className="title">
                            <h3><a href="https://drive.google.com/drive/u/1/folders/1QC4B3-IgEFkG6HaW_N5MtAAc1byovsl_" target="_blank">Komple Uygulamalı Web Geliştirme Eğitimi | .Net</a></h3>
                        </div>
                        <p>* Eğitmen: Can Boz</p>
                        <p>* Sertifika Tarihi: 08/2024</p>
                    </div>          
                </div>
            </div>
        </div>
    </>
  )
}

export default CertificatesPage
