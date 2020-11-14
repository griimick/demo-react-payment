import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";

export default function Header() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">asd</NavbarBrand>
        <NavLink style={{ float: "right" }} href="/login">
          Log In
        </NavLink>
      </Navbar>
    </div>
  );
}
