import React from "react";
import { RegistrationForm } from "../components";
import { useHistory } from "react-router-dom";

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
    <section>
      <h1> Registration </h1>
      <RegistrationForm {...formProps} />
    </section>
  );
}
