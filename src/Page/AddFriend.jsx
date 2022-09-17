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
    <div>
      {id}
      <button onClick={() => { adfriend(id) }}>Добавить в друзья</button>
    </div>
  );
}
export default AddFriend