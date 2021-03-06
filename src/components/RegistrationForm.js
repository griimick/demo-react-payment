import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";

export default function RegistrationForm(props) {
  const { handleSubmit, watch, register, errors } = useForm();
  const watchPassword = watch("password", null);
  const onSubmit = (values) => {
    props.onSubmit && props.onSubmit(values);
  };
  const onError = (errors) => {};

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            invalid={!!errors.email}
            name="email"
            id="exampleEmail"
            placeholder="Enter email address"
            innerRef={register({
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          <FormFeedback>{errors.email && errors.email.message}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="pasword">Password</Label>
          <Input
            name="password"
            type="password"
            invalid={!!errors.password}
            innerRef={register({
              required: "Required"
            })}
          />
          <FormFeedback>
            {errors.password && errors.password.message}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="paswordConfirm">Confirm Password</Label>
          <Input
            name="passwordConf"
            type="password"
            invalid={!!errors.passwordConf}
            innerRef={register({
              required: "Required",
              validate: (value) =>
                value === watchPassword || "Password does not match."
            })}
          />
          <FormFeedback>
            {errors.passwordConf && errors.passwordConf.message}
          </FormFeedback>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
