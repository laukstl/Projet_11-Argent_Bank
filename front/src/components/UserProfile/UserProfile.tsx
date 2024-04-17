import "./UserProfile.scss";
import Button from '../Button';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { selectFirstName, selectLastName, selectUserName, updateUserName } from "../../features/user/userSlice";
import { useSetUserNameMutation } from "../../api/userApiExtension";
import { setIsEditing } from '../../features/ui/uiSlice';

function UserProfile() {
    const firstName = useAppSelector(selectFirstName);
    const lastName = useAppSelector(selectLastName);
    const userName = useAppSelector(selectUserName);

    const dispatch = useAppDispatch();

    const [setUserName] = useSetUserNameMutation();
    const data = useSetUserNameMutation();

    const handleFormSubmit = (e:any) => {
        console.log(data)
        e.preventDefault();

        const form = e.target;
        const userNameInput = form.userNameInput.value

        dispatch(updateUserName(userNameInput));
        setUserName(userNameInput);

        dispatch(setIsEditing());
    };

    const handleCancelButtonClick = () => {
        dispatch(setIsEditing());
    };

    return (
        <form className="userProfileContainer" onSubmit={handleFormSubmit}>
            <div className="title">Edit user info</div>
            <label>
                User name: <input
                    // value={userNameInput}
                    name="userNameInput"
                    defaultValue={userName}
                // onChange={(e) => setUserNameInput(e.target.value)}
                />
            </label>
            <label>
                First name: <input className="disabled" disabled={true} name="firstNameInput" defaultValue={firstName ?? ''} /> {/* opérateur de coalescence nulle */}
            </label>
            <label>
                Last name: <input className="disabled" disabled={true} name="lastNameInput" defaultValue={lastName ?? ''} />
            </label>

            <div className="buttons">
                <Button
                    type="submit"
                    buttonText="Save"
                    // actionOnClick={handleSubmitButtonClick}
                />

                <Button
                    buttonText="Cancel"
                    actionOnClick={handleCancelButtonClick}
                />
            </div>
        </form>
    )
}

export default UserProfile;
