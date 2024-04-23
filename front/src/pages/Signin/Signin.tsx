import './Signin.scss';
import Button from '../../components/Button'

import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';

import { useAuth, testEmail, testPassword } from '../../features/auth/authUtils';
import { rememberMe } from '../../features/auth/authSlice';

function Signin() {
    const dispatch = useAppDispatch();
    const { login } = useAuth(dispatch);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isPasswordlValid, setIsPasswordValid] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [generalErrorMessage, setGeneralErrorMessage] = useState('');

    const handleSignInClick = async () => {
        // login("tony@stark.com", "password123");
        // login("steve@rogers.com", "password456");
        try {
            if ( isEmailValid && isPasswordlValid) {
                const loginResponse = await login(email, password);
                if (loginResponse) {
                    setGeneralErrorMessage(loginResponse);
                }
            }
        } catch (error:any) {
            setGeneralErrorMessage('Error during login: ' + error);
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
            <div className='generalErrorMessage'>{generalErrorMessage}</div>
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
                    <div className='errorMessageTitle'>{ isEmailValid ? '' : 'Invalid email format'}</div>
                    <div className='errorMessage'>{ isEmailValid ? '' : 'expected: userName@url.com'}</div>
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
                    <div className='errorMessageTitle'>{ isPasswordlValid ? '' : 'Invalid password'}</div>
                    <div className='errorMessage'>{ isPasswordlValid ? '' : 'Expected : Minimum 8 characters, including at least 1 letter and 1 digit'}</div>

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
