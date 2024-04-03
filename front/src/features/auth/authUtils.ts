
// fonctions utilitaires liées à l'auth

import { useLoginMutation } from './authApiExtension';
import type { AppDispatch } from '../../store/store';
import { loginSuccess, loginFailure, goLogout } from './authSlice';
import { useAppSelector } from '../../store/hooks';
import { selectIsRememberMe } from './authSlice';
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
                if (rememberMe) {
                    window.localStorage.setItem("tokenID", token);
                } else {
                    window.sessionStorage.setItem("tokenID", token);
                }
                dispatch(loginSuccess());
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
        dispatch(goLogout());
        navigate('/');
    }
    
    return { login, logout };
};

export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('tokenID');
};

export const getTokenFromSessionStorage = () => {
    return sessionStorage.getItem('tokenID');
};

// export const useGetTokenFromStore = () => {
//     const GetStoredUserToken: string = useAppSelector((state: any) => state.auth.token);
//     return GetStoredUserToken;
// };

// const ZuseToken = () => {
//     const isAuth = useAppSelector(state => state.auth.isAuthenticated);
//     console.log(isAuth);
// }

// ZuseToken();

// -----------------------------------------------------------------------

// Fonctions de validation
// Fonctions de manipulation de token
// Fonctions de redirection ( si token non valide/expiriré vers page connection)
// Autres fonctions utilitaires ( gestion des erreurs d'auth )

// import { useAppSelector } from '../../app/store/hooks';
// import type { RootState } from '../../app/store/store';

// import { useEffect } from 'react'; 
// import { useNavigate  } from 'react-router-dom';
// export const useRequireAuth = () => {
//     const isAuth = useAppSelector((state: RootState) => state.auth.isAuthenticated);
//     const navigate = useNavigate ();

//     useEffect(() => {
//         if (!isAuth) {return navigate("/sign-in");}
//     }, [isAuth, navigate]);};

//---------------------IDEES EN VRAC----------------------------------


// function()???
// store une valeur dans le store
// store.dispatch({ type: 'SET_VAL', payload: 'ma_valeur' });

// récup la val
// import type { RootState } from '../../app/store/store';
// import { useSelector } from 'react-redux';
// const val = useSelector((state: RootState) => state.isAnthenticated);
// console.log(val);


// const {token:object, setToken:function} = useState({email:null, password:null});

// localStorage.setItem('state', token);
// stock dans redux => isAuthenticated:booléen


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