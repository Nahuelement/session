
import { login, logout } from "../../actions/auth"
import { types } from "../../types/types"






describe('Pruebas en las acciones auth', () => { 

    test('login y longout deben de crear acciones respectivas ', () => {

        const  logIn = login(5456465,'nahuel')

        expect(logIn).toEqual({type:types.login,payload:{
            uid:expect.any(Number),
            displayName: expect.any(String),
        }})

        const logOut = logout()

        expect(logOut).toEqual({type: types.logout})
        
    })
    test('debe de realizar el startLogout ', () => {
        
    })
    
    


    
})
