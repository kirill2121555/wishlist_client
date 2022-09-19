import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { check, login } from "../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Login = observer(() => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const { user } = useContext(Context)
  console.log(user.isAuth)
  const click = async () => {
    try {
      await login(email, password);
      await check()
      navigate("/profil");
      window.location.reload()
    } catch (e) {
      console.log('error')
    }
  }

  return <div className="center">
    <div className='head'>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={email}
              onChange={e => setEmail(e.target.value)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
          </div>
        </form>
        <button type="submit" class="btn btn-primary" onClick={click}>Login</button>
        <br></br>
        Don't have an account yet?<a href="registration">Register</a>
    </div>

  </div>
})
export default Login