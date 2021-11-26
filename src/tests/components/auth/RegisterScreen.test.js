import { RegisterScreen } from "../../../components/auth/RegisterScreen";
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store' 
import thunk from "redux-thunk"
import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { types } from "../../../types/types";


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initialState = { // inicial estado de mock que remplaza al store de redux
    auth:{},
    
    ui:{
        loading:false,
        msgError:null 
    }
}
let store =mockStore(initialState)//STORE NO UTILIZA LOS REDUCER


describe('Pruebas en < RegisterScreen />', () => {

    const wrapper = mount(
    
        <Provider store = {store}>
            <MemoryRouter>
                <RegisterScreen />
            </MemoryRouter>
        </Provider>
    )

    test('debe de mostarrse correctamente', () => {

        expect(wrapper).toMatchSnapshot()

        
    })
    test('debe de hacer el dispatch de la accion respectiva ', () => {


        const emailField = wrapper.find('input[name="email"]')

        emailField.simulate('change',{ // esto simula un change entregandole los valores de target
            target:{
                value:'',//VALOR VACIO
                name: 'email',
            }
        })
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        })
        const actions = store.getActions()// TOMA TODA LAS ACCIONES DISPARADAS PUESTAS EN UN ARREGLO

        expect(actions[0]).toEqual({type:types.uisetError,payload:expect.any(String)})// RETORNA types.uisetError, YA QUE NO PUEDE TENER VALORES VACIOS

    })
    test('debe de mostrar la caja de alert con el mensaje de error  ', () => {

        const initialState = { // inicial estado de mock  remplaza al store de redux
            auth:{},
                
            ui:{
                loading:false,
                msgError:'email no valido ( Prueba de  msgError )' // GENERA UN WRAPPER CON EL ERROR MONTADO
                                                                        // YA QUE STORE NO UTILIZA LOS REDUCER
                }
            }
        const store =mockStore(initialState)
        const wrapper = mount(
                
        <Provider store = {store}>
            <MemoryRouter>
                <RegisterScreen />
            </MemoryRouter>
        </Provider>)
            
        const errorExpect = wrapper.find('.auth__alert-error')
        expect(errorExpect.exists()).toBe( true )
        expect(errorExpect.text().trim()).toEqual('email no valido ( Prueba de  msgError )')
           
        
    })
})
    
    
    

