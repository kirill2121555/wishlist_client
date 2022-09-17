import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../http/userApi";

const Login = () => {
  const navigate = useNavigate();

  const click = async () => {
    try {
     await logout()
      window.location.reload()
    } catch (e) {
      console.log('error')
    }
  }

  return <div className="center">
      <button className=" btn btn-primary" onClick={click}>Logout</button>
  </div>
}
export default Login