import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

export const PublicRouter = ({
    loginInstate,
    component:Component,
    ...rest}) => {


    

    return (
        <Route
        {...rest}
        component={(props) =>(
            (!loginInstate)?
            (<Component {...props} />):
            (<Redirect to='/' />)

        )}
        />
    )
}
PublicRouter.propTypes = {
    loginInstate:PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired

}
