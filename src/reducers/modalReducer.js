import React from 'react'
import { types } from '../types/types'


const initialState = {
    
    active: false
}


export const modalReducer = (state = initialState, action) => {
   switch (action.type) {
       case types.activeModal:
           return {
               ...state,
               active:true

             };
         case types.endModal:
            return {
                ...state,
                active:false
            };
              
    
        default:
            return state;
    }
 }
