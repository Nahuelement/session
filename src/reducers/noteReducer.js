
import { types } from '../types/types';



const initialState = {
    notes: [{
        id:'dieuhdhe',
        title: '', 
        body: '',
        date: new Date().getTime(),
        url: 'https://res.cloudinary.com/nahuelement/image/upload/v1637868882/cqttvmje88erxl8zw9ub.svg'
    },
    {   id:'dieuxzhdhesd',
        title: '', 
        body: '',
        date: new Date().getTime() *2,
        url: ''
    },{
        id:'dieuddssddhdhe',
        title: '', 
        body: '',
        date: new Date().getTime() + 10002,
        url: 'https://res.cloudinary.com/nahuelement/image/upload/v1637868846/lz1ewt19ssqaug9aj3yc.svg'
    }],
    active: null
}

export const noteReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.notesActive:
        return {
            ...state,
            active: {
                ...action.payload
            }
        }
        case types.notesAddNew:
        return {
            ...state,
            notes: [ ...state.notes, action.payload] }


        case types.notesLoad:
        return {
            ...state,
            notes: [...state.notes,...action.payload]}

        case types.notesUpdated:
                return {
                ...state,
            notes: state.notes.map(
                note => note.id ===action.payload.id
                    ? action.payload.note
                    : note
            ) }
        case types.notesDelete:
            
                return {
                ...state,
                active:null,
                notes: state.notes.filter(note => note.id !== action.payload)
             }
        case types.notesLogoutCleaning:
                return {
                    notes: [],
                    active: null
                }
        
    default:
        return state;
}
    
    
        
}
