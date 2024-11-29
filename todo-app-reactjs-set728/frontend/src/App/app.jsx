import '../styles/App.css'
import React from 'react'
import AdminPanel from '../pages/AdminPanel'
import Register  from '../pages/Register'
import { Login } from '../pages/Login'
const App= () => {
  let isAuth = false
  let isLogin = false
  return (
    <div>
        {!isAuth ? <Register /> : isLogin ?  <AdminPanel /> : <Login />}
    </div>
  )
}

export default App