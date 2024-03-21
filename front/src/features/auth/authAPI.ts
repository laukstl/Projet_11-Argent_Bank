// appels réseau pour l'authentification

import { loginSuccess, loginFailure } from './authSlice';
import { useAppDispatch } from "../../app/store/hooks";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type AppThunk = (...args: any[]) => void; // AppThunk temporaire

const login = async (email: string, password: string, dispatch: ReturnType<typeof useAppDispatch>) => { // NOTE: Magouille !
    try {
        const responseLogin = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const response = await responseLogin.json();

        if (!responseLogin.ok) {
            throw new Error('Authentication failed');
        }

        if (responseLogin.ok && response) {
            window.localStorage.setItem("userEmail", email);
            window.localStorage.setItem("tokenID", response.body.token);
        }
        
        dispatch(loginSuccess(response.body.token)); // dispatch d'une action en cas de success
    } catch (error) {
        dispatch(loginFailure()); // dispatch d'une en cas de fail
        throw new Error('Login failed: ' + error)
    }
};

export default login;

export const useAuth = () => {
    const dispatch = useAppDispatch();

    return { login: (email: string, password: string) => login(email, password, dispatch) };
};
