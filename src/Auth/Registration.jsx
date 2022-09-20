import React, { useState } from "react";
import { registration } from '../http/userApi'
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Registration = observer(() => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nick, setNick] = useState('')
  const [date, setDate] = useState(new Date())
  const navigate = useNavigate();

  const click = async () => {
    try {
      let data;
      data = await registration(email, password, nick, date);
      alert('Log in to your account')
      navigate("/");
    } catch (e) {
      console.log('error')
    }
  }

  return <div className="center">
    <div className='head'>
      <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Your nick</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              value={nick}
              onChange={e => setNick(e.target.value)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Date of Birth</label>
            <input type="date" className="form-control" min="1900-01-01" max="2100-01-01"
              value={date}
              onChange={e => setDate(e.target.value)}
            ></input>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="email" class="form-control" id="exampleInputPassword1"
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
        <button type="button" class="btn btn-primary" onClick={click}>Register</button>
      </div>
    </div>
  </div>
}
)

export default Registration