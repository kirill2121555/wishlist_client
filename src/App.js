import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import './App.css';
import Navbar from './Navbar/Navbar';
import AppRouter from './router/AppRouter';
import { Context } from '.';
import { check } from './http/userApi';


const App = observer(() => {
  const { user } = useContext(Context)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
      user.setNick(data.nick)
      user.setUserId(data.id)
    })
  }, [])



  return (
  
    <div className="app-wrapper">
      <Navbar  />
      <AppRouter />
    </div>
  );
}
)
export default App;