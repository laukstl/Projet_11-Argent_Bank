import "./UserProfile.scss";
import Button from '../Button';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { selectFirstName, selectLastName, selectUserName, updateUserName } from "../../features/user/userSlice";
import { useSetUserNameMutation } from "../../api/userApiExtension";
import { setIsEditing } from '../../features/ui/uiSlice';
import { getToken } from "../../features/auth/authUtils";

import { useAuth } from "../../features/auth/authUtils";

function UserProfile() {
    const firstName = useAppSelector(selectFirstName);
    const lastName = useAppSelector(selectLastName);
    const userName = useAppSelector(selectUserName);

    const dispatch = useAppDispatch();
    const { logout } = useAuth(dispatch);

    const [setUserName] = useSetUserNameMutation({
        // refetchOnMountOrArgChange: true,
    });

    const handleFormSubmit = async (e:any) => {
        e.preventDefault();
    
        const form = e.target;
        const userNameInput = form.userNameInput.value;
        const token = getToken();
    
        if (token) {
            try {
                await setUserName(userNameInput);
                // const response = await setUserName(userNameInput);
                // if (response.error.status === 200) {
                    dispatch(updateUserName(userNameInput));
                    dispatch(setIsEditing());
                // } else {
                    // setSubmitErrorMessage("Non autorisé"+ response.error.status)
                // }
            } catch (error) {
                throw new Error("Une erreur s'est produite lors de la mise à jour du nom d'utilisateur : " + error);
            }
        } else {
            logout();
            alert("Oops ! Il semblerait que votre token ait disparu ! Vous allez être redirigé sur la page d'accueil.");
        }
    };
    

    const handleCancelButtonClick = () => {
        dispatch(setIsEditing());
    };

    return (
        <form className="userProfileContainer" onSubmit={handleFormSubmit}>
            <div className="title">Edit user info</div>
            <label>
                User name: <input
                    name="userNameInput"
                    defaultValue={userName}
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
