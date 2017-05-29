import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                Homes
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/api'>
                API
                </NavLink>
            </li>
            <li>
                <NavLink exact activeClassName='active' to='/popular'>
                Popularsfew
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/popular/login'>
                Loginfew
                </NavLink>
            </li>

        </ul>
    );


export default Nav;