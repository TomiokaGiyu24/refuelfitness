import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <div className="fixed inset-0 bg-noise z-0 pointer-events-none" />
      <div className="relative z-10 w-full min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
