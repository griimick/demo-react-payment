import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

export default function Header() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarText>Sign In</NavbarText>
      </Navbar>
    </div>
  );
}
