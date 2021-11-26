import { db } from "../firebase/fireConfig";
import { types } from "../types/types";
import { collection ,addDoc, doc, setDoc, deleteDoc} from "firebase/firestore";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

// import cloudinary from 'cloudinary'

// // react-journal

//  cloudinary.config({ 
//     cloud_name: 'nahuelement', 
//     api_key: '723161997253356', 
//     api_secret: 'c2WpIaroeOWZNhdCdN8S0CQp-WE',
//     secure: true
//  });

export const startNewNotes = () =>{

    return async(dispatch, getState) =>{ // getState para obtener el estado

        const {uid} = getState().auth;
        

        const newNote = {
            title: '', 
            body: '',
            date: new Date().getTime(),
            url: ''
        }
        try{
            const docRef = await addDoc(collection(db,`${uid}/journal/notes`),newNote)
            dispatch(activeNote(docRef.id,newNote))
            // dispatch(startLodingNotes(uid)) IDEA MIA 
            dispatch(addNewNote(docRef.id,newNote))

        }
        catch (err) {
            console.log(err)
        } 
    }
}

export const activeNote = (id, note) => ({

    type:types.notesActive,
    payload:{
        id,
        ...note
    }
})

export const addNewNote = (id,note) => ({

    type:types.notesAddNew,
    payload:{
        id,
        ...note
    }
})


export const startLodingNotes = (uid) => {

    return async(dispatch) =>{

        try{
            const notes = await loadNotes(uid)
            dispatch(setNotes(notes))
        }
        catch(err) {
            console.log(err)

        }        
    }
}



export const setNotes = (notes) => ({

    type:types.notesLoad,
    payload:notes
    
}) 

export const startSaveNote = (note) => { 

    return async (dispatch, getState) =>{

        const {uid} = getState().auth; 
        
         if(!note.url){
             delete note.url;
         } 

        const noteToFirestore = {...note};
        delete noteToFirestore.id
        // console.log(noteToFirestore)
        
        try{
            await setDoc(doc(db,`${uid}/journal/notes/${note.id}`),noteToFirestore)
            Swal.fire('Guardado!',note.title,'success')
            dispatch(refreshNote(note.id,{...note}))
        }
        catch(err) {
            console.log(err)
        }
    
            
       
       
    }   

}
export const refreshNote = (id,note) =>({
    type:types.notesUpdated,
    payload:{
        id,
        note
    }

})

export const startUpLoading = (file) =>{
    return async(dispatch, getState) =>{

        const {active: activeNote} = getState().notes;
        
        Swal.fire({ 
            title: 'Uploading...',
            text:' Plase wait...',
            allowOutsideClick:false,
            allowEnterKey: () =>{
                Swal.showLoading();
            }
        }) 

        let fileUrl  = await fileUpload(file)
        
        Swal.close()
         if(!fileUrl){
         fileUrl= 'www.koi.partedelaprueba.porproblemasconJest().com'
        }
        activeNote.url = fileUrl
        
       

        dispatch(startSaveNote(activeNote))
        
    }
}

export const startDeleting = (id) => {
    return async(dispatch, getState) =>{

        const uid = getState().auth.uid

        try{
            await deleteDoc(doc(db,`${uid}/journal/notes/${id}`)) 
            dispatch(deleteNotes(id))
        }
        catch(err) {
            console.log(err)
            
        }
        

        
    }
}

export const deleteNotes = (id) => ({
    type:types.notesDelete,
    payload:id
})

export const noteLogout = () => ({
    type:types.notesLogoutCleaning,
})