import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  startUpLoading } from '../../actions/notes'




export const NotesAppBar = () => {


    const {active}= useSelector(state => state.notes)

    const {date} = active

    const dispatch = useDispatch()


    // const handledSave = () => {
    //     console.log('Archivo activo guardado:',active)
    //     dispatch(startSaveNote(active))
    // }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
       
        if (file){

            dispatch(startUpLoading(file))

        }
    }

    const handledUpPicture = () => {
        document.querySelector('#fileSelector').click()
    }

    return (
        <div className="notes__appbar">

            <span> Nª Cliente {date} </span>

            <input 
            id = 'fileSelector'
            type="file" 
            style ={{display:'none'}}
            name = 'file'
            onChange={handleFileChange}
            />
            <div>
                <button 
                className="btn"
                onClick = {handledUpPicture}
                >
                    Cargar archivo 
                </button>
               

            </div>
        </div>
    )
}
