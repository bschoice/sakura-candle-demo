import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './soft-fonts.css'
import './shop.css'
import './lesson.css'
import './social.css'
import './profile.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
