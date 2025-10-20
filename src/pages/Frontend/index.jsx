
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../../components/Header"
import Home from './Home'
import Menu from './Menu'
import About from './About'
import BookTable from './BookTable'
import NoPage from "../Misc/NoPage"
import Footer from  "../../components/Footer"

const Frontend = () => {
  return (
    <>
    <Header />  

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Menu' element={<Menu />} />
      <Route path='/About' element={<About />} />
      <Route path='/book-table' element={<BookTable />} />
      <Route path='*' element={<NoPage />} />
    </Routes>  
      
      <Footer />
    </>
  )
}
export default Frontend