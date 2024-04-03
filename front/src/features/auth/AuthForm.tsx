
// interface utilisateur du formulaire de connexion

import {useAuth} from './authUtils';

import styles from './AuthForm.module.scss'; // restreint les styles à ce module

import { useAppDispatch } from '../../store/hooks';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../store/hooks';
import { rememberMe } from './authSlice';

function AuthForm() {
    const dispatch = useAppDispatch();
    const { login } = useAuth(dispatch);

    const handleSignInClick = () => {
        login("tony@stark.com", "password123");
    };

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

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
                        defaultChecked={false}
                        onChange={
                            (e) => {dispatch(
                                rememberMe(e.target.checked)
                            )}}
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
