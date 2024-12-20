import { NavLink } from "react-router";

export function NavBar() {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </>
  );
}
