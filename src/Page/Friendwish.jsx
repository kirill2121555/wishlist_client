import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { friendwish } from "../http/req";

import OneWish from "./OneWish";
import Wish from "./wish";

const Friendwish = ({ friend }) => {
  const { id } = useParams();
  const [friendwishs, setfriendwishs] = useState([])
  useEffect(() => {
    friendwish(id).then(data =>{ setfriendwishs(data)
    console.log(data)})
  }, []);
  return (
    <div>
      {friendwishs.map(wish => <Wish wish={wish} v={'fr'} />)}

    </div>
  );
}
export default Friendwish