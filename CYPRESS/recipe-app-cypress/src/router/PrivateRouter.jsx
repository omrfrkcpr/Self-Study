
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  
  return user? <Outlet/>:<Navigate to="/"/>
}

export default PrivateRouter
