// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/page.tsx'
import AppQ from './Q/page.tsx'
import AppNull1 from './null1/page.tsx'
import AppNull2 from './null2/page.tsx'
import AppUglyYuri from './UglyYuri/page.tsx'
import KomaTrials from './komaTrials/page.tsx'

import './globals.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Q' element={<AppQ />} />
      <Route path='/null1' element={<AppNull1 />} />
      <Route path='/null2' element={<AppNull2 />} />
      <Route path='/UglyYuri' element={<AppUglyYuri />} />
      <Route path='/komaTrials' element={<KomaTrials />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>,
)
