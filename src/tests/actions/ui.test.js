import { removeError, setError, uiFinishLoading, uiStartLoading } from "../../actions/ui"
import { types } from "../../types/types"





describe('Probando ui actions', () => {

    test('todas las acciones debe de funcionar ', () => {

        const errorAction= setError('shuha')
        expect(errorAction).toEqual({type:types.uisetError,payload:'shuha'})

        const removeAction = removeError()
        expect(removeAction).toEqual({type:types.uiRemoveError})

        const starLoginAction = uiStartLoading()
        expect(starLoginAction).toEqual({type:types.uiStartLoading})

        const finishLoadingAction = uiFinishLoading()
        expect(finishLoadingAction).toEqual({type:types.uiFinishLoading})
        
    })
    
    
})
