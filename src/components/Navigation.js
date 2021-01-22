import React from 'react';
import { Link } from '@reach/router';

const Navigation = ({ logOutCallback}) => (
    <ul>

        <li><Link to="/" >Home</Link></li>
        <li><Link to="/Protected" >Protected</Link></li>
        <li><Link to="/Register" >Register</Link></li>
        <li><Link to="/Login" >Login</Link></li>
        <li><button onClick={logOutCallback}>Log out</button></li>

    </ul>
)

export default Navigation;