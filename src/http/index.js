import axios from "axios";

const $host = axios.create({  
    baseURL: 'https://wishlist-server.vercel.app/'// https://wishlist-server.vercel.app/
})

const $authHost = axios.create({
    baseURL: 'https://wishlist-server.vercel.app/'//http://localhost:5000/        
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}