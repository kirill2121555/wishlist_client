import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { friendwish } from "../http/req";

import OneWish from "./OneWish";
import Wish from "./wish";

const Friendwish = ({ friend }) => {
  const { id } = useParams();
  const [friendwishs, setfriendwishs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    friendwish(id).then(data =>{ setfriendwishs(data)
    console.log(data)}).finally(() => { setLoading(false) })
  }, []);

  if (loading) {
    return <div className="App">
    <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    </div>
}
  return (
    <div>
      {friendwishs.map(wish => <Wish wish={wish} v={'fr'} />)}

    </div>
  );
}
export default Friendwish