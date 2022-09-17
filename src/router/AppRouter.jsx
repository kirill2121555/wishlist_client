import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Context } from '../index.js';
import { authRoutes, publicRoutes } from './route.jsx'

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {(user.isAuth) && authRoutes.map(({ path, Element }) =>
                <Route key={path} path={path} element={Element} exact />
            )}
            {publicRoutes.map(({ path, Element }) =>
                <Route key={path} path={path} element={Element} exact />
            )}
        </Routes>
    )
})

export default AppRouter