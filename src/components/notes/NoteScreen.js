import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'

import {useForm} from '../../hooks/useForm'
import { useEffect } from 'react'
import { activeNote, startDeleting } from '../../actions/notes'



export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm( note );
    const { body, title, id } = formValues;

    const activeN = useRef( note );

    useEffect(() => {
        
        if ( note.id !== activeN.current.id ) {
            reset( note );
            activeN.current.id = note.id
        }else if (note.url !== activeN.current.url){
            reset( note )
            activeN.current.url = note.url
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, { ...formValues } ) );

    }, [formValues, dispatch])


    const handleDelete = () => {
        dispatch( startDeleting( id ) );
    }
    return (
        <div className="notes__main-content    ">
            
            <NotesAppBar  />

            <div className='notes__content   '>
            
                {/* <input 
                
                type="text"
                placeholder="Agrega un buen titulo"
                className ='notes__title-input animate__animated animate__fadeIn '
                onChange={handleInputChange}
                name = 'title'
                value = {title}
                
                />

                <textarea
                placeholder="¿Que a pasado hoy?"
                className='notes__textarea animate__animated animate__fadeIn '
                value = {body}
                name = 'body'
                onChange={handleInputChange} >

                </textarea> */}

                { note.url  && (<div className = 'notes__image animate__animated animate__fadeIn'>
                    <img 
                    src={note.url }
                    alt= 'Imagen X'
                        
                        />

                </div>)}
            </div>
            {/* <button

            className = 'btn btn-danger animate__animated animate__fadeIn animate__fast	800ms'
            onClick={handleDelete}
            >
                Eliminar
            </button> */}
            
        </div>



    )
}
