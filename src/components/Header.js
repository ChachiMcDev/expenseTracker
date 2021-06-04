import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut } ) => (
    <header>
        <h1>Expensify It!</h1>



        <NavLink 
            exact to="/dashboard" 
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
        <button onClick={startLogOut}>Logout</button>

    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);