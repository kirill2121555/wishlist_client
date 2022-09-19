import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteonefriend } from "../http/req";
import eye from '../img/eye.png'
import trash from '../img/trash.png'


const Friendwish = ({ friend }) => {

  const deletefriend = async (id) => {
    await deleteonefriend(id)
        .then(window.location.reload()
        )
}

  return (
    <div>
      <div className="o">
        <div className="posts">
          <div className="item1">
            {friend.nick}        
            <br></br>
             <small>{friend.birthday.slice(0,10)}</small>

          </div>
          <div className="item2">
            <img className="pict" src={trash}
              alt="trash" onClick={() => { deletefriend(friend._id) }}></img>
          </div>
          <div className="item3">
          <NavLink to={"../friendwish/" + friend._id}><img className="pict" src={eye}
              alt="trash" ></img></NavLink>

          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}
export default Friendwish