import './Signin.scss';
import Button from '../../components/Button'

import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';

import { useAuth, testEmail, testPassword } from '../../features/auth/authUtils';
import { rememberMe } from '../../features/auth/authSlice';

function Signin() {
    const dispatch = useAppDispatch();
    const { login } = useAuth(dispatch);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [isPasswordlValid, setIsPasswordValid] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignInClick = () => {
        // login("tony@stark.com", "password123");
        // login("steve@rogers.com", "password456");
        if ( isEmailValid && isPasswordlValid) {
            login(email, password);
        }
    };

    const handleUserNameInput = (email:string) => {
        const testEmailInput = testEmail(email);
        if (testEmailInput) {
            setIsEmailValid(true);
            setEmail(email);
        } else {
            setIsEmailValid(false);
        }
    };

    const handlePasswordInput = (password:string) => {
        const testPasswordInput = testPassword(password);
        if (testPasswordInput) {
            setIsPasswordValid(true);
            setPassword(password);
        } else {
            setIsPasswordValid(false);
        }
    };

    return (
        <main className="main bg-dark">
                    <section className='sign-in-content'>
            <i className='fa fa-user-circle sign-in-icon'></i>
            <h1>Sign In</h1>
            <form>
                <div className={`input-wrapper ${isEmailValid ? '' : 'notValid'}`}>
                    <label>Email
                        <input
                            type="text"
                            id="username"
                            autoComplete="username"
                            onChange={
                                (e) => {handleUserNameInput(e.target.value)}}
                        />
                    </label>
                </div>
                <div className={`input-wrapper ${isPasswordlValid ? '' : 'notValid'}`}>
                    <label>Password
                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={
                                (e) => {handlePasswordInput(e.target.value)}}
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
