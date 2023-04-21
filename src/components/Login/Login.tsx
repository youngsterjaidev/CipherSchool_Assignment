import React from "react";
import styled from "styled-components";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { Link } from "@reach/router";

const Container = styled.div`
  background: #262c36;
  color: #fff;
  padding: 1rem;
  box-shadow: 0 0 1rem rgba(8, 16, 16, 0.15);
  border-radius: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;

  & > div {
    padding: 0.5rem 0rem;
    width: 100%;
    text-align: center;
  }
`;

const LoginButton = styled(Button)`
  display: block;
  width: 100%;
`;

export default () => {
  return (
    <Container>
      <div>
        <h1>Signin</h1>
        <div></div>
      </div>
      <Form>
        <div>
          <h2>CipherSchools</h2>
          <div>Hey, Welcome</div>
          <p>Please provide your email and password to signin</p>
        </div>
        <div>
          <Input type="email" name="email" placeholder="Email ID" />
        </div>
        <div>
          <Input type="password" name="password" placeholder="password" />
          <Link to="">Forgot Password?</Link>
        </div>
        <div>
          <LoginButton type="button">Signin</LoginButton>
        </div>
        <div>
          Don't have an account ?<Link to="">Get Started</Link>
        </div>
      </Form>
    </Container>
  );
};
