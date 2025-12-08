import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <div className='bg-[#08070e] dm-sans' >
    <StrictMode>
     
    <App />
  </StrictMode>,
 </div>
)
