import React from 'react'


import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';



export const JournalEntry = ({id,date,title,body,url}) => {

    const dispatch = useDispatch()

    // const noteDate = moment(date)

    const handlerEnterClick = () =>{

        dispatch(activeNote(id,{date,title,body,url}))
    }

   
    return (
        <div 
        className="journal__entry pointer animate__animated animate__fadeIn  "
        onClick ={handlerEnterClick}>
            {url &&
                (<div 
                className="journal__entry-picture"
                style ={{
                    backgroundRepeat: 'no-repeat',
                    backgroundSize:'contain',
                    backgroundImage:`url(${ url })`}}
                >
            </div>)
            }

            <div 
            className="journal__entry-body"
            >
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>

            </div>
            <div className="journal__entry-date-box">
                 <h5>Servicios</h5>
                <h4>Información</h4>
                <span>más detalles</span>
                
            </div>
            
        </div>
    )
}
// {noteDate.format('MMMM')}