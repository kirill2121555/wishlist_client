import React from "react";
import { useState } from "react";
import { deleteonewish, updateonewish } from "../http/req";
import styles from "./styles.css";
import pen from '../img/pen.png'
import trash from '../img/trash.png'

const OneWish = ({ wish, v }) => {
    const [text, setText] = useState('')

    const deletewish = async (id) => {
        await deleteonewish(id)
            .then(window.location.reload()
            )
    }
    const updatewish = async (id) => {
        await updateonewish(id, text)
            .then(window.location.reload()
        )
    }
    return (
        <div>
            <div className="o">
                <div className='posts'>
                    <div className='item1'>
                        Wish:  {wish.title}
                    </div>
                    <div className="item2">
                        <img className="pict" src={trash}
                            alt="trash" onClick={() => { deletewish(wish._id) }}></img>
                    </div>
                    <div className="item3">
                        <img className="pict" src={pen}
                            alt="pen" data-bs-toggle="modal" data-bs-target="#exampleModal"></img>
                    </div>
                </div>
            </div>
<br></br>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">EDIT WISH</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <title></title> 
                            <input className="form-control"
                                value={text}
                                onChange={e => setText(e.target.value)}
                            ></input>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={() => { updatewish(wish._id) }}>Edit wish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default OneWish