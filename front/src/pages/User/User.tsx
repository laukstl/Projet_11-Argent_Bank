import './User.scss';
import Button from '../../components/Button';
import TransactionCard from '../../components/TransactionCard';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import UserProfile from '../../components/UserProfile/UserProfile';
import { selectIsEditing, setIsEditing } from '../../features/ui/uiSlice';
import { selectFirstName, selectLastName } from '../../features/user/userSlice';

function User() {
    const dispatch = useAppDispatch();
    const isEditing = useAppSelector(selectIsEditing);

    const handleEditNameClick = () => {
        dispatch(setIsEditing());
    };

    const firstName = useAppSelector(selectFirstName);
    const lastName = useAppSelector(selectLastName);

    return (
        <main className="main bg-dark">
            <div className="header">
                {!isEditing ? (
                    <>
                        <h1>Welcome back<br />{firstName} {lastName}!</h1>
                        <Button
                            buttonText="Edit Name"
                            actionOnClick={handleEditNameClick}
                        />
                    </>
                ) : (
                    <UserProfile />
                )}

            </div>
            <h2 className="sr-only">Accounts</h2>

            <TransactionCard
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                amountDesc="Available Balance"
                navigateTo="/transaction"
            />

            <TransactionCard
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                amountDesc="Available Balance"
                navigateTo="/transaction"
            />

            <TransactionCard
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                amountDesc="Current Balance"
                navigateTo="/transaction"
            />

        </main>
    )
}

export default User;
