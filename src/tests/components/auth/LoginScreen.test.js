

import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store' 
import thunk from "redux-thunk"
import { LoginScreen } from "../../../components/auth/LoginScreen";
import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { starGoogleLogin, startLogin } from '../../../actions/auth';



jest.mock('../../../actions/auth',() => ({ //mock devuelve un objeto ()
    starGoogleLogin:jest.fn(),
    startLogin: jest.fn()
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
            date: new Date().getTime() // para ver el cambio en la base de datos 
        }
    },
    ui:{
        loading:false,
        msgError:null 
    }
}
let store =mockStore(initialState)//STORE NO UTILIZA LOS REDUCER
store.dispatch = jest.fn()

describe('Pruebas en el <LoginScreen />', () => {

    beforeEach(() => {
        jest.clearAllMocks();
        store =mockStore(initialState)
        store.dispatch = jest.fn()

    });

    const wrapper = mount(
    
        <Provider store = {store}>
            <MemoryRouter>
                <LoginScreen />
            </MemoryRouter>
        </Provider>
    )

    test('el wrapper debe hacer match con el snapshot ', () => {

        expect(wrapper).toMatchSnapshot()

        
    })
    test('debe disparar la accion  starGoogleLogin ', () => {

        wrapper.find('.google-btn').prop('onClick')();
        expect(starGoogleLogin).toHaveBeenCalled()


        
    })
    test('debe disparar la accion startLogin ', () => {
        wrapper.find('.btn-block').prop('onClick')();
        expect(startLogin).toHaveBeenLastCalledWith('','') 
        
    })
    
    
    
    


    
    
})

