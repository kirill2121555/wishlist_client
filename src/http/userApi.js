import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password,nick) => {
    const {data}=await $host.post('/registration', {email, password, nick,})
    return data
}

export const login = async (email, password) => {
    const {data}= await $host.post('/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}



export const logout = async () => {
    localStorage.removeItem('token');
}