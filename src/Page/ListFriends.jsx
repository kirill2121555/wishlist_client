import React from "react";
import { useState, useEffect } from "react";
import { addfriend, myfriends } from "../http/req";
import Friend from "./Friend";
import Wish from "./wish";


const ListFriends = () => {

    const [friends, setFriends] = useState([])
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        myfriends().then(data => {
            setFriends(data)
        }).finally(() => { setLoading(false) })
    }, []);

    const addfrien = async () => {
        await addfriend(email).then(window.location.reload())
    }
    if (loading) {
        return <div className="App">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        </div>
    }
    return (
        <div>
            <br></br>
            {friends.length > 0
                ?
                <div>
                    {friends.map(friend => <Friend friend={friend} />)}
                </div>
                :
                <div className="App"><h2>Friends list is empty</h2></div>}
            <div className="App">
                <br></br>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    Add Friend
                </button>
            </div>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add Friend</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <title>Add Friend  </title>
                            <input className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            ></input>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={addfrien}>Add friend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ListFriends