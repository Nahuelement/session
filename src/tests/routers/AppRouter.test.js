import { AppRouter } from "../../routers/AppRouter";

import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store' 
import thunk from "redux-thunk"
import {mount} from 'enzyme'
import { MemoryRouter } from 'react-router-dom';
import { types } from "../../types/types";
import { login } from "../../actions/auth";
import { act } from "@testing-library/react";

import {firebase} from "../../firebase/fireConfig"
import Swal from 'sweetalert2'

const middlewares = [thunk]
const mockStore = configureStore(middlewares) 


jest.mock('../../actions/auth',() => ({ //mock devuelve un objeto ()
    Login:jest.fn(),
    
}))
jest.mock('sweetalert2',() => ({ //mock devuelve un objeto ()
    fire:jest.fn(),
    
}))
// jest.mock('../../firebase/fireConfig',() => ({ //mock devuelve un objeto ()
//      firebase:jest.fn()
//   }))

const initialState = { // inicial estado de mock que remplaza al store de redux
    auth:{},
    
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


describe('Pruebas en el componente AppRouter', () => {

   

    test('debe de llamar el login si estoy autenticado ', async () => {

        let user;
        await act( async () => {
            const wrapper = mount(
    
                <Provider store = {store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            )
        })

        // console.log(firebase)
    // expect(login).toHaveBeenCalled()


        
    })
    
    
})


