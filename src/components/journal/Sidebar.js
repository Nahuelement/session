import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth'
import { openModal } from '../../actions/modal'
import {  startNewNotes } from '../../actions/notes'
import { JournalEntries } from './JournalEntries'



export const Sidebar = () => {


    const dispatch = useDispatch()
    const {name} =  useSelector(state =>state.auth)


    const handleNewEntry = () => {
        dispatch(startNewNotes())
    }
    const handleOpenModal = () => {
        dispatch(openModal())
    }
    const handlendLogout = () => {
        dispatch(startLogout())
        
    }


    return (
       <aside className = 'journal__sidebar'>
           <div className = 'journal__sidebar-navbar'>
            <div style = {{display:'inline'}}>
               <h3 className = 'mt-5'  >
               <i className="fas fa-battery-full fa-1x " style ={{padding:'18px'}}></i>
               <label style = {{display:'inline-block',fontSize: '2.1vh'}}>{name}</label>
               </h3>
            </div>
               <button 
               className = 'btn'
               name = 'logout'
               style ={{marginTop:'-10px'}}
               onClick = {handlendLogout}
               >
                    Salir
               </button>

           </div>

          

           <JournalEntries />
           <div 
           className='journal__new-mock'
           onClick={handleNewEntry}
           >
               <i className="fas fa-users fa-2x"></i>
               
               <p className = 'mt-3'>
                   Nuevo usuario mock
               </p>
           </div>
           <div 
           className='journal__new-entry'
           onClick={handleOpenModal}
           >
               <i className="far fa-check-circle fa-5x"></i>
               
               <p className = 'mt-3'>
                   SOPORTE
               </p>
           </div>

       </aside>
    )
}
