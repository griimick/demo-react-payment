import React from "react";
import { useForm } from "react-hook-form";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function RegistrationForm(props) {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    props.onSubmit && props.onSubmit(values);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            invalid={errors.email}
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            innerRef={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
          />
          {errors.email && errors.email.message}
        </FormGroup>
        <FormGroup>
          <Label for="pasword">Password</Label>
          <Input
            name="username"
            type="password"
            innerRef={register({
              validate: (value) => value !== "admin" || "Nice try!"
            })}
          />
          {errors.password && errors.password.message}
        </FormGroup>
        <FormGroup>
          <Label for="paswordConfirm">Confirm Password</Label>
          <Input
            name="username"
            type="password"
            innerRef={register({
              validate: (value) => value !== "admin" || "Nice try!"
            })}
          />
          {errors.passwordConf && errors.passwordConf.message}
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
