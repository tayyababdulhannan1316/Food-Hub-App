
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Frontend from './Frontend'
// import Auth from './Auth'

const Index = () => {
  return (
    <Routes>
    <Route path='/*' element={<Frontend />}></Route>
    {/* <Route path='/auth/*' element={<Auth />}></Route> */}
    </Routes>
  )
}

export default Index
