import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { Context } from "..";


const Navbar = observer(() => {

const {user} = useContext(Context)

  return <nav className='nav'>
    {user.isAuth ? (
      <nav class="navbar navbar-expand-sm bg-light justify-content-center">
        <a class="navbar-brand" ><NavLink to="profil" className='nav-link'>I</NavLink></a>
        <a class="navbar-brand" ><NavLink to="friends" className='nav-link'>Friends</NavLink></a>
        <a class="navbar-brand" ><NavLink to="logout" className='nav-link'>Logout</NavLink></a>

    
      </nav>)
      :
      (<nav class="navbar navbar-expand-sm bg-light justify-content-center">
        <a class="navbar-brand" ><NavLink to="login" className="nav-link">Wishlist</NavLink></a>
      </nav>)
    }
  </nav >
}
)

export default Navbar;