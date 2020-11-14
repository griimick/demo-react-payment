import React from "react";
import { RegistrationForm } from "../components";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";

export default function Registration() {
  let history = useHistory();

  const onSubmit = async (values) => {
    console.log({ values }, "Form Submitted");
    history.push("/plans");
  };
  const formProps = {
    onSubmit: onSubmit
  };
  return (
    <Container style={{ paddingTop: 40 }}>
      <RegistrationForm {...formProps} />
    </Container>
  );
}
