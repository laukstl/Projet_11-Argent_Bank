import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useAuth } from '../../features/auth/authUtils';
import { selectFirstName, selectUserName } from '../../features/user/userSlice';

function Header() {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
    const { logout } = useAuth(dispatch);

    const firstName = useAppSelector(selectFirstName);
    const userName = useAppSelector(selectUserName);

    return (
        <nav className="main-nav">
            <NavLink
                className="main-nav-logo"
                to="/"
            >
                <img
                    className="main-nav-logo-image"
                    src=".\src\assets\argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            {!isAuthenticated ? (
                <NavLink
                    className="main-nav-item"
                    to="/sign-in"
                >
                    <i className="fa fa-user-circle"></i>
                    <span>&nbsp;Sign In</span> {/* add " " underline pour coller à la maquette */}
                </NavLink>

            ) : (
                <div className='navLink'>
                    <NavLink
                        className="main-nav-item"
                        to="/user"
                    >
                        <i className="fa fa-user-circle"></i>
                        <span>&nbsp;{userName} ( {firstName} )</span>
                    </NavLink>

                    <NavLink
                        className="main-nav-item"
                        onClick={logout}
                        to="/"
                    >
                        <i className="fa fa-sign-out"></i>
                        <span>&nbsp;Sign Out</span>
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default Header;
