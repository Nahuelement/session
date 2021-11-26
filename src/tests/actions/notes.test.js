import { startDeleting, startLodingNotes, startNewNotes, startSaveNote, startUpLoading } from "../../actions/notes"
import configureStore from 'redux-mock-store' 

import { types } from "../../types/types"
import thunk from "redux-thunk" 
import { fileUpload } from "../../helpers/fileUpload"
//  import { doc, getDoc } from "firebase/firestore"
// import { db } from "../../firebase/fireConfig"

jest.mock('../../helpers/fileUpload',() =>({
    fileUpload: jest.fn(()=>{
        return 'https://hola.com/cosa.jpg'}
        ) 
}))
 
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares) 


const initialState = { // mock que remplaza al store de redux
    auth:{
        uid:'TESTING'
    },
    notes:{
        active:{
            id:'ImTMfs5frDggDoYFXhnm',
            title:'hola',
            body:'ijijij',
            date: new Date().getTime() // para ver el cambio en la base de datos 

        }

    }
}

let store =mockStore(initialState)


describe('Pruebas en las actions notes', () => {

    beforeEach(() => {

        store =mockStore(initialState)

    });
 
    test('debe de crear una nueva nota con startNewNotes ', async() => {

        await store.dispatch(startNewNotes())
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
                url: '' 
                }
            })
        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number),
                url: '' 
                    }
                })

        const docId = actions[0].payload.id
        await store.dispatch(startDeleting(docId));
         

    })
    // test('probando startLodingNotes action que debe cargar las notas', async() => {
    //     console.log(initialState.auth.uid) 
 
    //     await store.dispatch(startLodingNotes(initialState.auth.uid) )

    //     const actions = store.getActions()

    //     console.log(actions)

    // Problemas con @firebase/firestore: Firestore (9.1.0): FIRESTORE (9.1.0) INTERNAL ASSERTION FAILED: Unexpected state 
    // })
    
 
    test('startSaveNote debe actualizar la nota ', async() => {


        const note ={

            id:'ImTMfs5frDggDoYFXhnm',
            title:'titulo',
            body:'body',

        }

        await store.dispatch(startSaveNote(note))

        const actions = store.getActions()
        
 
        expect(actions).toEqual([{
            type: types.notesUpdated,
            payload:{
                id:'ImTMfs5frDggDoYFXhnm',
                note:expect.any(Object)
            }
        }])
        // const state = store.getState()
        
        
        //  const docRef = doc(db,`${state.auth.uid}/journal/notes/${note.id}`);
     
        //  const expects = await getDoc(docRef)
        //  console.log(expects)  
        // Problemas con @firebase/firestore: Firestore (9.1.0): FIRESTORE (9.1.0) INTERNAL ASSERTION FAILED: Unexpected state 



         
    }) 

    // // test('startUpLoading debe actualizar el url de la entrada', async() => { 


    // //     const file = new File([],'nombre.jpg')

        


    // //     await store.dispatch(startUpLoading(file))
         
        
        
       
       
        





        
    // })
     
    


        
})
    
    

