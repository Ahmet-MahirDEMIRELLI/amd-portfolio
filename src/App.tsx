import { useState } from 'react'
import './App.css'

function App() {
  const [isEnglish, setIsEnglish] = useState(false)

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  return (
    <div className="centered">
      <div style={{ textAlign: 'center' }}>
        <h1>
          {isEnglish ? (
            <>
            We moved to{' '}
              <a
                href="https://ahmetmahirdemirelli.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ahmetmahirdemirelli.com
              </a>
            </>
          ) : (
            <>
              <a
                href="https://ahmetmahirdemirelli.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ahmetmahirdemirelli.com
              </a>{' '}
              a taşındık!
            </>
          )}
        </h1>

        <button className="toggle-button" onClick={toggleLanguage}>
          {isEnglish ? 'Türkçe Göster' : 'Show English'}
        </button>
      </div>
    </div>
  )
}

export default App
