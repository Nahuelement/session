import { types } from "../types/types"




export const openModal =() =>({
    type : types.activeModal,
    
})
export const endModal =() =>({
    type : types.endModal,
    
})