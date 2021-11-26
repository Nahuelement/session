import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"






describe('Probando authReducer', () => {


    test('debe de retornar el estado por defecto ', () => {

        const state = authReducer({},{})
        expect(state).toEqual({},{})

        
    })
    test('debe de autenticar , colocar id y colocar displayName ', () => {

        const action = {
            type:types.login,
            payload: {
                uid:123,
                displayName:'lalarala'
            }}
        const state = authReducer({},action)
        
        expect(state).toEqual({uid:123,name:'lalarala'})
    
    })
    test('debe de eliminar los datos de la sesion', () => {

        const action = {
            type:types.logout}
           
        const state = authReducer({
            uid:123,
            name:'lalarala'

        },action)
        
        expect(state).toEqual({})
    
    })
    test('debe de retonar el state si un type no es reconocido', () => {

        const action = {
            type:types.bluechesse}
           
        const state = authReducer({
            uid:123,
            name:'lalarala'
        },action)

        console.log(state)
        
        expect(state).toEqual({uid:123,name:'lalarala'})
    
    })



})