import React from 'react'
import { NavLink } from 'react-router-dom';

const SignOutLinks = ()=>{
return(
        <ul className="right">
        <li><NavLink to="/signup">Signup</NavLink></li>
        <li><NavLink to="/signin">Login</NavLink></li>
        {/* <li><NavLink to="/" className='btn btn-floating red lighten-1'>NN</NavLink></li> */}
        </ul>
)
}
export default SignOutLinks;