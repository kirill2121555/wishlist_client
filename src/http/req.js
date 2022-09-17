import {$authHost, $host} from "./index";

export const profilinformation = async () => {
    const {data} = await $authHost.get(`/profil`)
    return data
}
export const addwish = async (text) => {
    const {data} = await $authHost.post('/addwish',{text} )
    return data
}
export const deleteonewish = async (id) => {
    const {data} = await $authHost.delete('/deleteonewish/'+id )
    return data
}

export const updateonewish = async (id,text) => {
    const {data} = await $authHost.post('/updatewish',{id,text} )
    return data
}

export const myfriends = async () => {
    const {data} = await $authHost.get('/myfriends')
    return data
}
export const friendwish = async (id) => {
    const {data} = await $authHost.get(`/friendwish?id=${id}`)
    return data
}
export const addfriend = async (id) => {
    const {data} = await $authHost.get(`/addfriend?email=${id}`)
    return data
}
export const deleteonefriend = async (id) => {
    const {data} = await $authHost.delete('/deleteonefriend/'+id )
    return data
}