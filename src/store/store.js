import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { modalReducer } from "../reducers/modalReducer";
import { noteReducer } from "../reducers/noteReducer";
import { uiReducer } from "../reducers/uiReducer";




const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



 const reducers = combineReducers({
    auth: authReducer,
    ui:uiReducer,
    notes:noteReducer,
    modal:modalReducer
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk)
    )
)