import React from "react";
import { Navbar, NavbarBrand, NavLink } from "reactstrap";

export default function Header() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">demo-react-payment</NavbarBrand>
        <NavLink href="/">Log In</NavLink>
      </Navbar>
    </div>
  );
}
