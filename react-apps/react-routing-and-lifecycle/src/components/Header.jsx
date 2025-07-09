import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/plans">Plans</NavLink>
            <ul>
              <li>
                <NavLink to="/plans/1">Free Plan</NavLink>
              </li>
              <li>
                <NavLink to="/plans/2">Standard Plan</NavLink>
              </li>
              <li>
                <NavLink to="/plans/3">Gold Plan</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
