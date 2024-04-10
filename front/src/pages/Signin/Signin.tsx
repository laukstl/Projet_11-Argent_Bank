import './Signin.scss';
import Button from '../../components/Button'

import { useAppDispatch } from '../../store/hooks';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

import { useAuth } from '../../features/auth/authUtils';
import { rememberMe } from '../../features/auth/authSlice';

function Signin() {
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
        <main className="main bg-dark">
                    <section className='sign-in-content'>
            <i className='fa fa-user-circle sign-in-icon'></i>
            <h1>Sign In</h1>
            <form>
                <div className='input-wrapper'>
                    <label>Username
                        <input
                            type="text"
                            id="username"
                            autoComplete="username"
                        />
                    </label>
                </div>
                <div className='input-wrapper'>
                    <label>Password
                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </label>
                </div>
                <div className='input-remember'>

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
                <Button
                    buttonText="Sign In"
                    actionOnClick={handleSignInClick}
                />
            </form>
        </section>
        </main>
    )
}

export default Signin;
