import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import MainPage from './components/MainPage.tsx'
import ExperiencePage from './components/ExperiencePage.tsx'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="experience" element={<ExperiencePage />} />
      </Route>
    </Routes>
  </HashRouter>,
)
