import './Signin.scss';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label>Username
                            <input
                                type="text"
                                id="username"
                                autoComplete="username"
                            />
                        </label>
                    </div>
                    <div className="input-wrapper">
                        <label>Password
                            <input
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </label>
                    </div>
                    <div className="input-remember">

                        <label><input type="checkbox" id="remember-me" />
                            Remember me
                        </label>
                    </div>
                    <Link to="/user">
                        <button
                            type="button"
                            className="sign-in-button"
                        >
                            Sign In
                        </button>
                    </Link>
                </form>
            </section>
        </main>
    )
}

export default Signin;
