
// interface utilisateur du formulaire de connexion

import {useAuth} from './authUtils';

import styles from './AuthForm.module.scss'; // restreint les styles à ce module
// import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../app/store/hooks';

// import { useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../app/store/hooks';
// import { logout } from './authSlice';

function AuthForm() {
    const dispatch = useAppDispatch();
    // dispatch(logout());²
    const { login } = useAuth(dispatch);

    const handleSignInClick = () => {
        login("tony@stark.com", "password123");
    };

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    // console.log(useAppSelector(state => state.auth.isAuthenticated))
    // useEffect(() => {
    //     handleSignInClick()
        
    //     console.log(isAuth);
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    if (isAuthenticated) {
        return <Navigate to="/user" />;
    }

    return (
        <section className={styles['sign-in-content']}>
            <i className={`fa fa-user-circle ${styles['sign-in-icon']}`}></i>
            <h1>Sign In</h1>
            <form>
                <div className={styles['input-wrapper']}>
                    <label>Username
                        <input
                            type="text"
                            id="username"
                            autoComplete="username"
                        />
                    </label>
                </div>
                <div className={styles['input-wrapper']}>
                    <label>Password
                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </label>
                </div>
                <div className={styles['input-remember']}>

                    <label><input
                        type="checkbox"
                        id="remember-me"
                    // activated=> dispatch
                    />
                        Remember me
                    </label>
                </div>
                <button
                    type="button"
                    className={styles['sign-in-button']}
                    onClick={handleSignInClick}
                >
                    Sign In
                </button>
            </form>
        </section>
    )
}

export default AuthForm;
