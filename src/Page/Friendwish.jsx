import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { friendwish } from "../http/req";

import Wish from "./wish";

const Friendwish = ({ friend }) => {
  const { id } = useParams();
  const [friendwishs, setfriendwishs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    friendwish(id)
      .then(data => setfriendwishs(data))
      .finally(() => { setLoading(false) })
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
      {friendwishs.length === 0
        ?
        <h1 className="App">This user has no wishes yet</h1>
        :
        friendwishs.map(wish => <Wish wish={wish} v={'fr'} />)}

    </div>
  );
}
export default Friendwish