import React from "react";
import { Container } from "reactstrap";
import { LoginForm } from "../components";

export default function Login() {
  const formProps = {};
  return (
    <Container style={{ paddingTop: 40 }}>
      <LoginForm {...formProps} />
    </Container>
  );
}
