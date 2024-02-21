import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import SmoothScrolling from './utils/SmoothScrolling.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScrolling>
        <App />
      </SmoothScrolling>
    </BrowserRouter>
  </React.StrictMode>,
)
