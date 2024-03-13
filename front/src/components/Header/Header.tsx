import './Header.scss';
import { NavLink } from 'react-router-dom';

function Header() {
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

            <NavLink
                className="main-nav-item"
                to="/sign-in"
            >
                <i className="fa fa-user-circle"></i>
                <span>&nbsp;Sign In</span> {/* add " " underline pour coller à la maquette */}
            </NavLink>
        </nav>
    )
}

export default Header;
