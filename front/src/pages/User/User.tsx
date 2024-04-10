import './User.scss';
import Button from '../../components/Button';

import { useAppSelector } from '../../store/hooks';
import { Navigate } from 'react-router-dom';
import { useFetchUserProfile } from '../../features/user/userUtils';
import UserProfile from '../../components/UserProfile/UserProfile';
import { useState } from 'react';

function User() {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditNameClick = () => {
        setIsEditing(true);
      };
    
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    useFetchUserProfile();

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" />; // protection supplémentaire
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                {!isEditing && (
                    // <button
                    //     className="edit-button"
                    //     onClick={handleEditNameClick}
                    // >Edit Name</button>
                    <Button
                        buttonText="Edit Name"
                        actionOnClick={handleEditNameClick}
                    />
                )}
                {isEditing && <UserProfile />}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Button
                        buttonText="View transactions"
                        actionOnClick={()=>{}}
                    />
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Button
                        buttonText="View transactions"
                        actionOnClick={()=>{}}
                    />
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Button
                        buttonText="View transactions"
                        actionOnClick={()=>{}}
                    />
                </div>
            </section>
        </main>
    )
}

export default User;
