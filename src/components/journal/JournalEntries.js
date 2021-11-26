

import { useSelector } from 'react-redux'
import { JournalEntry } from './JournalEntry'




export const JournalEntries = () => {



    let {notes} = useSelector(state => state.notes)
    // notes.sort((a, b) => a.date - b.date );


   

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
