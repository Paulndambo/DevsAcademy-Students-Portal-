import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import StudentPortal from './pages/StudentPortal'
import AssignmentDetails from './pages/assignments/AssignmentDetails'
import Login from './auth/Login'
import ProtectedLayout from './ProtectedRoute'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path='/' element={<StudentPortal />} />
          <Route path='/assignments/:id' element={<AssignmentDetails />} />
        </Route>
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
