import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'


export const PrivateRouter = ({
    loginInstate,
    component:Component,
    ...rest}) => {

        
    
localStorage.setItem('lastpath',rest.location.pathname)
    return (
        <Route
        {...rest}
        component={(props) =>(
            (loginInstate)?
            (<>
            <Component {...props} /> 
            </>
            )
            :
            (<Redirect to='/auth/login' />)

        )}
        />
    )
}
PrivateRouter.propTypes = {
    loginInstate:PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired

}
