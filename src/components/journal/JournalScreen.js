import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { JornalModal } from './JornalModal'
import { NothingSelect } from './NothingSelect'
import { Sidebar } from './Sidebar'



export const JournalScreen = () => {

    const {active} =  useSelector(state =>state.notes)

    return (
        <div className="journal__main-content animate__animated  animate__fadeIn animate__fast	800ms">

        <Sidebar />
        
        <main>
            {
            active?
            (<NoteScreen />)
            :(<NothingSelect /> )
            }
        </main>
        < JornalModal />
        
        
    </div>
    )
}
