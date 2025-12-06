import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <div className='bg-[#050505] dm-sans' >
    <StrictMode>
       <Navbar></Navbar> 
    <App />
  </StrictMode>,
 </div>
)
