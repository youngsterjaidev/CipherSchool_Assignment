import React, { useState } from "react";
import styled from "styled-components";
import { Button, Login, Navbar, SideNav } from "../../components";
import Modal from "../../Modal";

interface Props {
  path: string;
}

const Container = styled.div``;

const Main = styled.div`
  padding: 5rem 8rem;
`;

const Heading = styled.h1`
  line-height: 1.4;
  font-size: 3rem;

  & > b {
    color: #f3912e;
  }
`;

const P = styled.p`
  font-size: 2rem;
`;

export default ({}: Props) => {
  const [showLogin, toggleLogin] = useState(false);

  const closeModal = () => {
    toggleLogin(!showLogin);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <SideNav />
        <Main>
          <Heading>
            Welcome To <b>the future</b> of Learning
          </Heading>
          <P>Start Learning by best creators for </P>
          <div>
            <Button type="button">Start Learning Now</Button>
          </div>
        </Main>
      </Container>
      {showLogin ? (
        <Modal closeModal={closeModal}>
          <Login />
        </Modal>
      ) : null}
    </div>
  );
};
