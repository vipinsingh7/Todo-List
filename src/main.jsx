import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main-c">
      <div className="center-container">
    <App />
    </div>
    </div>
  </React.StrictMode>,
)
