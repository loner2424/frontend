import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { URLProvider } from './context/URLContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <URLProvider>
      <App />
      </URLProvider>
    
    </AuthContextProvider>
    
  </React.StrictMode>,
)
