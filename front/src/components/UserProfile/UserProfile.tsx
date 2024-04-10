import "./UserProfile.scss";
import Button from '../Button';

import { selectUserInfo } from "../../features/user/userSlice";
import { useAppSelector } from "../../store/hooks";

function UserProfile() {
    const userInfo = useAppSelector(selectUserInfo);

    return (
        <div className="userProfileContainer">
            <div className="title">Edit user info</div>
            <label>
                User name: <input name="userNameInput"  defaultValue={userInfo.userName ?? ''} /> {/* opérateur de coalescence nulle */}
            </label>
            <label>
                First name: <input disabled={true} name="firstNameInput" defaultValue={userInfo.firstName ?? ''} />
            </label>
            <label>
                Last name: <input disabled={true} name="lastNameInput" defaultValue={userInfo.lastName ?? ''} />
            </label>

            <div className="buttons">
                <Button
                    buttonText="Save"
                    actionOnClick={()=>{}}
                />

                <Button
                    buttonText="Cancel"
                    actionOnClick={()=>{}}
                />
            </div>
        </div>
    )
}

export default UserProfile;