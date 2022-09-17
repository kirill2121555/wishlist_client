import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { addfriend, friendwish } from "../http/req";

const AddFriend = ({ friend }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {

  }, []);
  const adfriend = async (id) => {
    addfriend(id).then(
      navigate("/friends"))
  }
  return (
    <div className="App">
      <h3>Add a user {id} to your friends list ? </h3>
      <button className="btn btn-primary" onClick={() => { adfriend(id) }}>Add a friend</button>
    </div>
  );
}
export default AddFriend