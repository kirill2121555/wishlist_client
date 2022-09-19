import React from "react";
import { useState } from "react";
import { deleteonewish, updateonewish } from "../http/req";
import styles from "./styles.css";
import pen from '../img/pen.png'
import trash from '../img/trash.png'
import { useEffect } from "react";

const OneWish = ({ wish }) => {
    const [text, setText] = useState('')
    // useEffect(() => {
    //setText(wish.title)
    // }, []);

    const deletewish = async (id) => {
        alert(id)

        await deleteonewish(id)
            .then(window.location.reload()
            )
    }
    const updatewish = async (id, text) => {
        await updateonewish(id, text)
            .then(window.location.reload())
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
                        <img className="pict" src={pen} data-bs-toggle="modal" data-bs-target={`#we${wish._id}`}
                            alt="pen"
                        ></img>
                    </div>
                </div>

            </div>
            <br></br>

            <div class="modal fade" id={`we${wish._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input className="form-control"
                                value={text}
                                onChange={e => setText(e.target.value)}
                            ></input>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={() => { updatewish(wish._id,text) }}>Edit wish</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    );
}
export default OneWish