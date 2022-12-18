import './style.css';

import { NavLink } from "react-router-dom";

const Header = props => {
    return (<header>
        <h2 className="color-accent">
            <NavLink to="/">
                Caesar Cipher
            </NavLink>
        </h2>
        <div className="wrapper-nav">
            <h4 className="color-main-extend">
                <NavLink to="/" className={({ isActive }) => {
                    return isActive ? 'underline' : '';
                }}>
                    Cipher
                </NavLink>
            </h4>
            <h4 className="color-main-extend">
                <NavLink to="/bruteforce" className={({ isActive }) => {
                    return isActive ? 'underline' : '';
                }}>
                    BruteForce
                </NavLink>
            </h4>
        </div>
    </header>);
};

export default Header;
