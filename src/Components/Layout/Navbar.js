import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = ()=>{
return(

       <nav className="wrapper grey darken-3">
       <div className="container">
       <Link to ="/" className="brand-logo" >The Plan</Link>
       <SignedInLinks></SignedInLinks>
       <SignOutLinks></SignOutLinks>
       </div>
       </nav>
)
}
export default Navbar;