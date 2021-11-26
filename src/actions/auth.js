import { googleAuthProvider,facebookAuthProvider} from "../firebase/fireConfig"
import { getAuth, signInWithPopup, GoogleAuthProvider ,signInWithEmailAndPassword,
         FacebookAuthProvider,createUserWithEmailAndPassword,updateProfile,
         signOut} from "firebase/auth";
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui";
import Swal from "sweetalert2";
import { noteLogout } from "./notes";




export const startLogin = (email, password) => {

    return(dispatch) =>{
        dispatch(uiStartLoading())


        signInWithEmailAndPassword(getAuth(), email, password)
        .then(({user}) =>{
            dispatch(login(user.uid,user.displayName));
            dispatch(uiFinishLoading())
       
        }).catch(e => {
            
            // const errorCode = e.code;
            const errorMessage = e.message;

            let message = errorMessage;

            if(String(errorMessage)==='Firebase: Error (auth/invalid-email).'){
                 message = 'ingrese email valido'

            }else if (String(errorMessage)==='Firebase: Error (auth/wrong-password).'){
                 message = 'Password incorrecto'
                 
            }else if (String(errorMessage)==='Firebase: Error (auth/internal-error).'){
                 message = 'Ingrese email y contraseña'

                 
            }else if (String(errorMessage)==='Firebase: Error (auth/user-not-found).'){
                message = 'Email no registrado'
                
           }
           
            dispatch(uiFinishLoading())

            Swal.fire('Error',message,'error')
            
      })

    
}
}

export const startRegisterWhitEmailPassword  = (email, password,name) => {

    return(dispatch) =>{

    createUserWithEmailAndPassword(getAuth(),email, password)
    .then(async({user}) =>{
        
        await updateProfile(getAuth().currentUser,{displayName:name})
        
        dispatch(login(user.uid,user.displayName))
       
        
    })
    .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;

        let message;
        if(String(errorMessage)==='Firebase: Error (auth/email-already-in-use).'){
            message = 'Usuario ya registrado con este email'

        }
       
        Swal.fire('Error',message,'error')

    }
    )
}}

export const starGoogleLogin = () => {
    
    return(dispatch) => {
        
       
        signInWithPopup(getAuth(),googleAuthProvider)
        .then(({user}) =>{
            dispatch(login(user.uid,user.displayName))
            
        }).catch((e) =>{
            
            GoogleAuthProvider.credentialFromError(e);
            
        })
        
    
    }}

    export const starFacebookLogin = () => {
    
        return(dispatch) => {
           
            signInWithPopup(getAuth(),facebookAuthProvider)
            .then((result) =>{
                const user = result.user;

                console.log(user)
            }).catch(FacebookAuthProvider.credentialFromError)
        }}
            

  

export const login = (uid, displayName) => ({

   
        type: types.login,
        payload: {
            uid,
            displayName
        }
})
export const startLogout = () => {

   return async(dispatch)=> {

    await signOut(getAuth())
    dispatch(logout())
    dispatch(noteLogout())

   }
    
}

export const logout = () => ({

    type: types.logout,
})
