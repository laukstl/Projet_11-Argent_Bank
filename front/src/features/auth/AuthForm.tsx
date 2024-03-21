/* eslint-disable @typescript-eslint/no-restricted-imports */

// interface utilisateur du formulaire de connexion

import login from './authAPI';
import { useAppDispatch } from "../../app/store/hooks"

import styles from './AuthForm.module.scss'; // restreint les styles à ce module
import { Link } from 'react-router-dom';

function AuthForm() {
    const dispatch = useAppDispatch();

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
                <Link to="/user">
                    <button
                        type="button"
                        className={styles['sign-in-button']}
                        onClick={() => login("tony@stark.com", "password123", dispatch)} // NOTE: dispatch = magouille !
                    >
                        Sign In
                    </button>
                </Link>
            </form>
        </section>
    )
}

export default AuthForm;
