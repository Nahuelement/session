import { types } from "../../types/types"





describe('Pruebas con los tipos', () => {

    const values = {

        login:'[Auth] Login',
        logout:'[Auth] Logout',
    
        uisetError: '[UI] set Error',
        uiRemoveError: '[UI] Remove Error',
    
        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',
    
    
        notesAddNew : '[Notes] New note',
        notesActive : '[Notes] set active note',
        notesLoad : '[Notes] Load note',
        notesUpdated : '[Notes] Updated note',
        notesFileUrl : '[Notes] updated image url',
        notesDelete : '[Notes] Delete note',
        notesLogoutCleaning : '[Notes] logout Cleaning',
    }

    test(' probar si los valores de types estan correctos ', () => {


            expect(types).toEqual(values)

        
    })
    
    
})
