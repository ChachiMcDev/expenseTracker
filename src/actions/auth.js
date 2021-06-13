import { firebase, googleAuthProvider, facebookProvider } from '../firebase/firebase';


export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

const getProps = ({loginwith}) => {
    return console.log(loginwith)
}

export const startLogin = () => {
   /// getProps()
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut();
    }
}