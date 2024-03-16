import './Signin.scss';
import { Link } from 'react-router-dom';
// import store from './store';
// import { useState } from 'react';

function Signin() {
    // const {token:object, setToken:function} = useState({email:null, password:null});

    // const currentState = store.getState();

    // localStorage.setItem('state', token);

    // stock dans redux => isAuthenticated

// const isTokenExpired = () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       return true;
//     }
//     const tokenExpiration = new Date(JSON.parse(atob(token.split('.')[1])).exp * 1000);
//     return tokenExpiration < new Date();
//   };
  
//   if (isTokenExpired()) {
//     // Rediriger vers la page de connexion ou renouveler le token
//     // ...
//   } else {
//     // Le token est toujours valide, poursuivre avec l'application
//     // ...
//   }

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
