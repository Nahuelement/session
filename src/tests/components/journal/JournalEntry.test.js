import { JournalEntry } from "../../../components/journal/JournalEntry";
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store' 
import thunk from "redux-thunk"
import {mount} from 'enzyme'
import { activeNote } from "../../../actions/notes";



jest.mock('../../../actions/notes',() => ({ //mock devuelve un objeto ()
    activeNote:jest.fn(), 
   
}))
  

const middlewares = [thunk]
const mockStore = configureStore(middlewares) 

const initialState = { }

let store =mockStore(initialState)//STORE NO UTILIZA LOS REDUCER
store.dispatch = jest.fn()

const data = {
    id : 'y78678686',
    date : new Date().getTime(),
    title:' hola q tal',
    body:'bodybulding',
    url:'www.houn.lo' 
}

const wrapper = mount(

    
    
    <Provider store = {store}>
         <JournalEntry {...data}/> 
    </Provider>
)

describe('Prueban en < JournalEntry />', () => {


    test('debe de mostrar correctamente el componente  ', () => {
        expect(wrapper).toMatchSnapshot()
        
    })
    test('debe de llamar a  activeNote', () => {

        wrapper.find('.journal__entry').prop('onClick')();
        expect(store.dispatch).toHaveBeenCalled() 
        const idExpect = data.id;
        delete data.id
        expect(activeNote).toHaveBeenLastCalledWith(idExpect,{...data});


        
    })
    
    
    
})
