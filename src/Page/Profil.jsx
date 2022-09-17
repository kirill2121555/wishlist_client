import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addwish, profilinformation } from "../http/req";
import OneWish from "./OneWish";
const Profil = () => {
    const [pr, setpr] = useState([])
    const [thing, setThing] = useState()
    const [wishs, setWishs] = useState([])
    const [qrcode, setQrcode] = useState('')


    useEffect(() => {
        profilinformation().then(data => {
            console.log(data)
            setpr(data[0])
            setQrcode(data[1])
            setWishs(data[2])
        })
    }, []);


    const addthing = async () => {
        if (thing !== '') {
            await addwish(thing)
            window.location.reload()
        }
        else (alert('Напишите желание'))
    }

    return (
        <div>
            Your nick: {pr.nick}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Share
            </button>
            {wishs.map(wish => <OneWish wish={wish} />)}
            <div className="App">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" >
                    Add wish
                </button>
            </div>
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add wish</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <title> Add wish</title>
                            <input className="form-control"
                                value={thing}
                                onChange={e => setThing(e.target.value)}
                            ></input>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={addthing}>  Add wish</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <title>QR</title>
                            <img src={qrcode} alt="trash"></img>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onClick={addthing}>Добавить новое</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profil