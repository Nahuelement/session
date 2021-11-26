import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {  starGoogleLogin, startLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'



export const LoginScreen = () => {

    const dispatch = useDispatch()//PUEDE HACER DISPATCH DESDE CUALQUIER LUGAR DE LA APLICACION

    const {loading} = useSelector(state =>state.ui)
    const [formValues, HandleInputChange] = useForm({
        email: '',
        password: ''
    });

    const {email , password} = formValues;

    const handleLogin = () => {
        
        
        dispatch(startLogin(email,password))
      

    }
    const handleLoginGoogle = (e) => {
        
        dispatch(starGoogleLogin())

    }
    



    return (
        <>
        
            <h3 className="auth__title ">Login Mock</h3>
            <form onSubmit={handleLogin}>

                <input 
                type="text"
                placeholder="mail"
                name="email"
                className="auth__input"
                autoComplete = 'off'
                value = {email}
                onChange={HandleInputChange}
                />
                <input 
                type="password"
                placeholder="password"
                name="password"
                className="auth__input"
                autoComplete = 'off'
                value = {password}
                onChange={HandleInputChange}
                />


                <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={handleLogin}
                
                disabled = {loading}
                
                
                >Login
                
                </button>

      
                <div className="auth__social-networks">
                    <p>
                        Login con Google
                    </p>
                    <div 
                        className="google-btn"
                        onClick={handleLoginGoogle}
                        disabled = {loading}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <br/>
                    
                </div>

                {/* <Link 
                to="/auth/register"
                className="link"
                >
                    Crear nueva cuenta
                </Link> */}


            </form>
            
        </>
    )
}
