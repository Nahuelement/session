

import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'




export const JournalEntries = () => {



    const {notes} = useSelector(state => state.notes)
    notes.sort((a, b) => b.date - a.date);


   

    return (
        <div className ='journal__entries animate__animated  animate__fadeIn animate__slow'>

            {
               notes.map(note =>(
                 <JournalEntry 
                 key = {note.id} 
                 {...note}
                 
                 /> 
               )) 
            }
        </div>
    )
}
