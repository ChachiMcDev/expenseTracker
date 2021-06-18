import React from 'react';
import { connect } from 'react-redux';
//import { startLogin } from '../actions/auth';
import { startLogin, startLoginFacebook } from '../actions/auth';




//export const LogInPage = ({ startLogin }) => (
//    <div className="box-layout">
//        <div className="box-layout__box">
//            <h1 className="box-layout__title">Expense Tracker App</h1>
//            <p>Do you know where your expenses are right now?</p>
//            <button className="button" onClick={startLogin}>Login with Google</button>
//
//        </div>      
//    </div>
//);
//


export const LogInPage = ({ startLogin, startLoginFacebook }) => (
    <div className="box-layout">
        
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expense Tracker App</h1>
            <p>Do you know where your expenses are right now?</p>
            <button className="button button--glogin" onClick={startLogin}>Login with Google</button>
            <button className="button" onClick={startLoginFacebook}>Login with Facebook</button>
        </div>      
    </div>
);



//const mapDispatchToProps = (dispatch) => ({
//    startLogin: () => dispatch(startLogin())
//})
//

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
})

export default connect(undefined, mapDispatchToProps)(LogInPage);