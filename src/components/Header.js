import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";
import { useRouteMatch } from "react-router-dom";

export default function Header() {
  let matchLogin = useRouteMatch("/login");
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">asd</NavbarBrand>
        {!matchLogin && (
          <NavLink style={{ float: "right" }} href="/login">
            Log In
          </NavLink>
        )}
      </Navbar>
    </div>
  );
}
