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
    <div>
      <h3>Registration</h3>
      <RegistrationForm {...formProps} />
    </div>
  );
}
