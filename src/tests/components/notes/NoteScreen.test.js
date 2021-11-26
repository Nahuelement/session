import { NoteScreen } from "../../../components/notes/NoteScreen";

import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store' 
import thunk from "redux-thunk"
import {mount} from 'enzyme'
import { activeNote, startDeleting } from "../../../actions/notes";


jest.mock('../../../actions/notes',() => ({ //mock devuelve un objeto ()
    startDeleting:jest.fn(),
    activeNote: jest.fn()
}))


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = { // inicial estado de mock que remplaza al store de redux
    auth:{},
    notes:{
        active:{
            id:'ImTMfs5frDggDoYFXhnm',
            title:'hola',
            body:'body',
            date: 43443243244234
        }
    },
    ui:{
        loading:false,
        msgError:null 
    }
}
let store =mockStore(initialState)//STORE NO UTILIZA LOS REDUCER
store.dispatch = jest.fn()

describe('Pruebas en el <NoteScreen />', () => {
    const wrapper = mount(
    
        <Provider store = {store}>
                <NoteScreen />
        </Provider>
    )

    test('debe de mostrar el NoteScreen ', () => {

        expect(wrapper).toMatchSnapshot()
        
    })
    test('debe disparar la accion  startDeleting ', () => {

        wrapper.find('.btn-danger').prop('onClick')() 
        expect(startDeleting).toBeCalled()
         
    })
    test('debe de disparar activeNote apenas cambie el estado del formulario ', () => {

        wrapper.find('input[name="title"]').simulate('change',
        {target:{
            value:'Hola de nuevo',//VALOR VACIO
            name: 'title',
        }} 
            ) 
        expect(activeNote).toHaveBeenLastCalledWith(
            "ImTMfs5frDggDoYFXhnm", 
            {
                "body": "body",
                "date": 43443243244234,
                "id": "ImTMfs5frDggDoYFXhnm",
                 "title": "Hola de nuevo"
                }
        )
        
         
    })
    
    
})
