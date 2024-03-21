import './User.scss';

// import { useRequireAuth } from '../../features/auth/authUtils';
import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppSelector } from '../../app/store/hooks';
import type { RootState } from '../../app/store/store';

function User() {
    // useRequireAuth();
    const navigate = useNavigate();

    const isAuth = useAppSelector((state: RootState) => state.auth.isAuthenticated);

    useEffect(() => {
        console.log(isAuth)
        if (!isAuth) {
            navigate("/sign-in");
        } else {
            navigate("/user")
        }
    }, [isAuth]);

    useEffect(() => {
        // After successful sign-in, navigate to the user page
        if (isAuth) {
            navigate('/user');
        }
    }, [isAuth, navigate]);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default User;