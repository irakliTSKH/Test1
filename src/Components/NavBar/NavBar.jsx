
import { NavDiv, AdminButton } from "./NavBar.styled";
import { NavLink } from "react-router-dom";

function NavBar({ pages }) {
  
  const dynamicNavLinks = pages.map((route, index) => (
    <NavLink key={index} to={route.name}>
      {route.name}
    </NavLink>
    
  ));
  return (
    <NavDiv>

      <ul>
        <NavLink to="/">Home</NavLink>
        {dynamicNavLinks}
      </ul>

        <NavLink to="adminpanel">
          <AdminButton>Admin</AdminButton>
        </NavLink>

    </NavDiv>
  );
}

export default NavBar;

