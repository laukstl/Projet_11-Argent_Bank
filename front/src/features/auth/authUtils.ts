
// fonctions utilitaires liées à l'auth

import { useLoginMutation } from '../../api/authApiExtension';
import type { AppDispatch } from '../../store/store';
import { setIsAuth, loginFailure, unsetIsAuth } from './authSlice';
import { useAppSelector } from '../../store/hooks';
import { selectIsRememberMe } from './authSlice';
import { wipeUserInfo } from '../user/userSlice';
import { useNavigate } from 'react-router-dom';

export const useAuth = (dispatch: AppDispatch) => {
    const [loginMutation] = useLoginMutation();
    const rememberMe = useAppSelector(selectIsRememberMe)
    const navigate = useNavigate();

    const login = async (email: string, password: string) => {
        try {
            const result:any = await loginMutation({ email, password });
            if ('data' in result) {
                const { token } = result.data.body;
                if (!rememberMe) {
                    window.sessionStorage.setItem("tokenID", token);
                } else {
                    window.localStorage.setItem("tokenID", token);
                }
                dispatch(setIsAuth());
               } else {
                throw new Error('Login failed: ' + result.error.data.message);
            }
        } catch (error:any) {
            dispatch(loginFailure());
            throw new Error('Login failed: ' + error);
        }
    }

    const logout = () => {
        window.localStorage.removeItem("tokenID");
        window.sessionStorage.removeItem("tokenID");
        dispatch(wipeUserInfo());
        dispatch(unsetIsAuth());
        navigate('/');
    }
    
    return { login, logout };
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('tokenID');
};

// export const getTokenFromSessionStorage = () => {
//     return sessionStorage.getItem('tokenID');
// };

export const getToken = () => {
    return sessionStorage.getItem('tokenID') ?? localStorage.getItem('tokenID');
};


export const checkPersistentToken = () => {
    const token = getTokenFromLocalStorage();
    if (token) {
        console.log(token)
    }
}



// -----------------------------------------------------------------------

// Fonctions de validation
// Fonctions de manipulation de token
// Fonctions de redirection ( si token non valide/expiriré vers page connection)
// Autres fonctions utilitaires ( gestion des erreurs d'auth )

//---------------------IDEES EN VRAC----------------------------------


export const testEmail = () => {
    // validité email
}

export const testPassword = () => {
    // champ vide
    // nombre de chat
}

export const testToken = () => {
    // const isTokenExpired = () => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         return true;
    //     }
    //     const tokenExpiration = new Date(JSON.parse(atob(token.split('.')[1])).exp * 1000);
    //     return tokenExpiration < new Date();
    // };

    //   if (isTokenExpired()) {
    //     // Rediriger vers la page de connexion ou renouveler le token
    //     // ...
    //   } else {
    //     // Le token est toujours valide, poursuivre avec l'application
    //     // ...
    //   }
}