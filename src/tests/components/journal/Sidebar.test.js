import { Sidebar } from "../../../components/journal/Sidebar";
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store' 
import thunk from "redux-thunk"
import {mount} from 'enzyme'

import { types } from "../../../types/types";

import { startLogout } from "../../../actions/auth";
import { startNewNotes } from "../../../actions/notes";


jest.mock('../../../actions/notes',() => ({ //mock devuelve un objeto ()
    startNewNotes:jest.fn(), 
   
}))

jest.mock('../../../actions/auth',() => ({ //mock devuelve un objeto ()
    startLogout:jest.fn(), 
   
}))
  

const middlewares = [thunk]
const mockStore = configureStore(middlewares) 


const initialState = { // inicial estado de mock que remplaza al store de redux
    auth:{
        name:'Nahuel'
    },
    
    ui:{
        loading:false,
        msgError:null  
    },
    notes:{
        active:{
            id:'ade98'
        },
        notes:[]
    }
}
let store =mockStore(initialState)//STORE NO UTILIZA LOS REDUCER
store.dispatch = jest.fn()


const wrapper = mount(
    
    <Provider store = {store}>
         <Sidebar />
    </Provider>
)

describe('Pruebas con < Sidebar />', () => {

    test('debe de mostrarse correctamente  ', () => {

        expect(wrapper).toMatchSnapshot()
        
    })
    test('llamar al startLogout ', () => {

        wrapper.find('button[name="logout"]').prop('onClick')() 
        expect(startLogout).toBeCalled()
    })
    test('llamar al startNewNotes ', () => {
        
        const newEntryExpect = wrapper.find('.journal__new-entry')
        newEntryExpect.prop('onClick')()
        expect(startNewNotes).toBeCalled() 
    })
    
    
    
    
})
