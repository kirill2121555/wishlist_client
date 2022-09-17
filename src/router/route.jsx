import React from 'react'
import Login from '../Auth/Login'
import Logout from '../Auth/Logout'
import Registration from '../Auth/Registration'
import Profil from '../Page/Profil'
import ListFriends from '../Page/ListFriends'


import ProfilFriend from '../Page/ProrilFriend'
import Friendwish from '../Page/Friendwish'
import AddFriend from '../Page/AddFriend'

export const publicRoutes = [
 
    {
        path: "/login",
        Element: <Login />
    },
    {
        path: "/registration",
        Element: <Registration />
    },  
]

export const authRoutes = [
    {
        path: "/Profil",
       Element: < Profil />
    },
    {
        path: "/Friends",
        Element: <ListFriends />
    },
    {
        path: "/Friend",
        Element: <ProfilFriend />
    },
    {
        path: "/login",
       Element: <Login />
    },
    {
        path: "/registration",
       Element: <Registration />
    },
    {
        path: "/friendwish/:id",
       Element: <Friendwish />
    },
    {
        path: "/addfriend/:id",
       Element: <AddFriend />
    },
    {
        path: "/logout",
       Element: <Logout />
    },
 
]