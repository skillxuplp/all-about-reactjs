import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstComponent from './App.jsx'
import './index.css'
import User from './User.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstComponent />
    <User />
  </React.StrictMode>,
)
