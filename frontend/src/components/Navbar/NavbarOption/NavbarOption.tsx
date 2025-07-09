import type { NavbarOptionProps } from './types';
import { NavLink } from "react-router-dom";

const NavbarOption = ({navItem, currentURL}: NavbarOptionProps) => {
    return(
        <li key={navItem.to}>
            <NavLink 
                to={navItem.to} 
                className={currentURL}>
                    {navItem.label}
            </NavLink>
        </li>
    )
};

export { NavbarOption }