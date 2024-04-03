import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { goLogout } from '../../features/auth/authSlice';
import { selectFirstName } from '../../features/user/userSlice';

function Header() {
    const dispatch = useAppDispatch();
    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  
    const userName = useAppSelector(selectFirstName);

    return (
        <nav className="main-nav">
            <NavLink
                className="main-nav-logo"
                to="/"
            >
                <img
                    className="main-nav-logo-image"
                    src=".\src\assets\argentBankLogo.png"
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>

            <p style={{color: 'red'}}>Auth ? {isAuthenticated?'TRUE':'FALSE'}</p>

            {!isAuthenticated? (
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
                to="/sign-in"
                >
                <i className="fa fa-user-circle"></i>
                <span>&nbsp;{userName}</span>
                {/* <span>&nbsp;{userName}</span> */}
                </NavLink>

                <NavLink
                    className="main-nav-item"
                    onClick={() => dispatch(goLogout())}
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
