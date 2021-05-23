import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer'
import { useStatevalue } from './StateProvider'

function Login() {
    const [{}, dispatch] = useStatevalue()
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user: result.user
            })
        }).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png" alt="login" />

                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign  In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
