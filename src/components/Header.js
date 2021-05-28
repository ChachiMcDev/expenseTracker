import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify It!</h1>


        <NavLink  
            exact to="/" 
            activeClassName="is-active"
            activeStyle={{
                color: "blue"
            }}
        >
            Dashboard
        </NavLink>

        <NavLink 
            exact to="/create" 
            activeClassName="is-active"
            activeStyle={{
                color: "blue"
            }}
        >
            Create Expense
        </NavLink>

        <NavLink 
            exact to="/help" 
            activeClassName="is-active"
            activeStyle={{
                color: "red"
            }}
            >
            Need Help?
        </NavLink>

    </header>
)

export default Header;