import React from 'react'
import ReactDOM from 'react-dom/client'
import Sessao from './components/Sessao'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Footer from './components/Footer'
import './index.css'
import './Style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Sessao />
    <Galeria />
    <Footer />
  </React.StrictMode>,
)
