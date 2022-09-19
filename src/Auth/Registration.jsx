import React, { useState } from "react";
import { registration } from '../http/userApi'
import { observer } from "mobx-react-lite";

const Registration = observer(() => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nick, setNick] = useState('')
  const [date, setDate] = useState(new Date())

  const click = async () => {
    try {
      let data;
      data = await registration(email, password, nick, date);
      console.log(data)
      alert('Rent to the mail and confirm the account')
      window.location.reload()
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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={click}>Register</button>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Confirm mail</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Rent to the mail and confirm the account
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
)

export default Registration