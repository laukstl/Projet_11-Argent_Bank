
// fonctions utilitaires liées à l'auth

import { useLoginMutation } from '../../api/authApiExtension';
import type { AppDispatch } from '../../store/store';
import { setIsAuth, loginFailure, unsetIsAuth } from './authSlice';
import { useAppSelector } from '../../store/hooks';
import { selectIsRememberMe } from './authSlice';
import { wipeUserInfo } from '../user/userSlice';
import { useNavigate } from 'react-router-dom';
// import { useState, useEffect  } from 'react';

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

export const useGetToken = () => {
        const sessionToken = sessionStorage.getItem('tokenID');
        const localToken = localStorage.getItem('tokenID');

    return localToken || sessionToken || null;
};

export const getToken = () => {
    let token = null;
    const sessionToken = sessionStorage.getItem('tokenID');
    const localToken = localStorage.getItem('tokenID');

    if (localToken) {
        token = localToken;
    } else if (sessionToken) {
        token = sessionToken;
    } else {
        token = null;
    }

    return token;
};

export const testEmail = (email:string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const testPassword = (password:string) => {
    // Au moins une lettre majuscule, une lettre minuscule, un chiffre, un caractère spécial et une longueur minimale de 8 caractères
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    // Au moins 8 caractères, une lettre minuscule, un chiffre ( pour coller au backend ^^ )
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/
    return passwordRegex.test(password);
}

export const testToken = () => {
    const isTokenExpired = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return true;
        }
        const tokenExpiration = new Date(JSON.parse(atob(token.split('.')[1])).exp * 1000);
        return tokenExpiration < new Date();
    };

      if (isTokenExpired()) {
        // navigate to Login
      } else {
        // renew token
      }
}