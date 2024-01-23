import React from 'react'
import CreateUser from './pages/CreateUser'
import { Routes,Route } from 'react-router-dom'
import Users from './pages/Users'
import UpdateUser from './pages/UpdateUser'

const App = () => {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Users/>} />
      <Route path='/create' element={<CreateUser/>}/>
      <Route path='/update/:id' element={<UpdateUser/>}/>
    </Routes>
   
    </>
  )
}

export default App
