import {getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  Switch ,BrowserRouter as Router, Redirect} from 'react-router-dom'
import { login } from '../actions/auth'
import { startLodingNotes } from '../actions/notes'
import { JournalScreen } from '../components/journal/JournalScreen'

import { AuthRouter } from './AuthRouter'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'



export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checkState, checkSetstate] = useState(true)
    const [loginInstate, setloginInstate] = useState(false)

    useEffect(() => {
        onAuthStateChanged(getAuth(),async(user) => {
           
            if(user?.uid){
                dispatch(login(user.uid,user.displayName))
                setloginInstate(true)
                
                dispatch(startLodingNotes(user.uid))
                
            }else{
                setloginInstate(false)
            }
            checkSetstate(false)
       
        })
    }, [dispatch,checkSetstate])

    if(checkState){
        return (
            <h1> Cargando mock datos </h1>
        )
    }

    return (

        <Router>
            <div>
            <Switch>    
                <PublicRouter path= '/auth' loginInstate= {loginInstate}  component = {AuthRouter}/> 
                <PrivateRouter   path= '/' loginInstate= {loginInstate} component = {JournalScreen}/>
                <Redirect   to= '/auth/register' />
            </Switch>
                
            </div>
        </Router>
    )
}
