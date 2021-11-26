import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'

import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWhitEmailPassword } from '../../actions/auth'
import Swal from "sweetalert2";



export const RegisterScreen = () => {



    const dispatch = useDispatch()
    const {msgError} = useSelector(state =>state.ui)

    
    // useEffect(() => {

    //     if (msgError){
    //     Swal.fire('Error',String(msgError),'error')}
        
        
    // }, [dispatch])


    const [ formvalues, handleInputChange ] = useForm({
        name:'esto es ',
        email:'un@ejemplo',
        password:'de ',
        confirm:'de un register'
    })
    const {name, email, password,confirm} = formvalues



    const handlenRegister = (e) => {
        e.preventDefault()
        

        if(isFormValid()){
            dispatch(startRegisterWhitEmailPassword(email, password,name))
            
        }
            
        
        

        
        
    }

    const isFormValid = () => {
        if(name.trim().length ===0){
            dispatch(setError('Nombre de usuario requerido'))
            
            Swal.fire('Error','Nombre de usuario requerido','error')
            
            return false
        }else if (!validator.isEmail(email)){
            dispatch(setError('Email valido requerido'))
            Swal.fire('Error','Email valido requerido','error')
            
            return false

        }else if (password!==confirm){
            dispatch(setError('password y confirm no son identicos'))
            Swal.fire('Error','password y confirm no son identicos','error')
            
            return false
        }
        else if (password.length <= 5){
            dispatch(setError('Password minimo 6 caracter '))
            Swal.fire('Error','Password minimo 6 caracter','error')
            
            return false}
        else{
            dispatch(removeError())
        }
        

        return true

    }

    return (
        <>

            <h3 className="auth__title">Register mock</h3>
            <form onSubmit={handlenRegister}>
                
                
                
                {msgError &&
                 (<div className="auth__alert-error">
                    {msgError}
                </div>)
                } 
              

                <input 
                type="text"
                placeholder='name'
                name="name"
                className="auth__input"
                autoComplete = 'off'
                value = {name}
                onChange={handleInputChange}
                />
                <input 
                type="text"
                placeholder='mail'
                name="email"
                className="auth__input"
                autoComplete = 'off'
                value = {email}
                onChange={handleInputChange}
                />
                <input 
                type="password"
                placeholder='password'
                name="password"
                className="auth__input"
                autoComplete = 'off'
                value = {password}
                onChange={handleInputChange}
                />
                <input 
                type="password"
                placeholder='coconfirm password'
                name="confirm"
                className="auth__input"
                autoComplete = 'off'
                value = {confirm}
                onChange={handleInputChange}
                />


                <button
                type="submit"
                onClick= {handlenRegister}
                className="btn btn-primary btn-block mb-5"
                
                >Register
                
                </button>

    

                <Link 
                to="/auth/login"
                className="link "
                >
                    ¿Ya estas registrado?
                </Link>


            </form>
            
        </>
    )
}
