import React from 'react'
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="data:image/png;base64,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" alt=""/>
                <h1>facebook</h1>
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
