import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'

 import {useForm} from '../../hooks/useForm'
import { useEffect } from 'react'
import { activeNote } from '../../actions/notes'



export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );
     const [ formValues, handleInputChange, reset ] = useForm( note );
    //  const { body, title, id } = formValues;

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


    // const handleDelete = () => {
    //     dispatch( startDeleting( id ) );
    // }
    return (
        <div className="notes__main-content    ">
            
            <NotesAppBar />

            <div className='notes__content   '>
            
                

                { note.url  && (<div className = 'notes__image animate__animated animate__fadeIn'>
                    <img 
                    src={note.url }
                    alt= 'Imagen X'
                        
                        />

                </div>)}
            </div>
          
        </div>



    )
}
