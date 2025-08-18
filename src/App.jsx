

import './App.css'
import React from 'react'
import Main from './Component/Main'
import Footer from './Component/Footer'
import Home from './Component/Home'
import{Routes,Route} from 'react-router-dom' 
import Hometwo from './Component/Hometwo'

const App = () => {
  return (
    <>
    


      
    <Routes>
<Route exact path="/" element={<Main/>}/>
<Route exact path="/home" element={<Home/>}/>
<Route exact path="/hometwo" element={<Hometwo/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
