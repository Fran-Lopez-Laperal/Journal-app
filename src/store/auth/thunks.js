import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { checkinCredentials, login, logout } from "./authSlices"

export  const checkinAuthentication = () => {
    return async (dispatch) => {
            dispatch(checkinCredentials())
    }
}


export const startGoogleSignIn = () => {
    return async (dispatch) => {

        dispatch( checkinCredentials())

        const result = await singInWithGoogle();
        if(!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login( result ))

    }
} 


export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {

    return async (dispatch) => {

        dispatch(checkinCredentials());

        const {ok , uid, photoURL, errorMessage } = await registerUserWithEmailPassword( {email, password, displayName})

        if(!ok) return dispatch(logout({errorMessage}))
        
        dispatch(login( {uid, displayName, email, photoURL} ))

    }

}


export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkinCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}

export const startLogout =  () => {
    return async (dispatch) => {
         await logoutFirebase();

         dispatch(logout())
    }
}

// export const startLoginWithEmailPassword = ({ email, password }) => {

//     return async (dispatch) => {
//         dispatch(checkinCredentials());
  
//         const result = await LoginWithEmailPassword({ email, password });
        
//         if (!result.ok) return dispatch(logout( result.errorMessage ));
//         dispatch(login(result))
//     }

// }