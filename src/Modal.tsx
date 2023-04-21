import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Container = styled.div`
  position: relative;
  width: 100%;
  position: fixed;
  display: grid;
  place-items: center;
  height: 100vh;
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #80808030;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  cursor: pointer;
`;

const Content = styled.div``;

const modalRoot: HTMLDivElement | null = document.getElementById("modal");

const Modal = ({ children, closeModal }) => {
  const elRef = useRef<HTMLDivElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    if (elRef) {
      modalRoot.appendChild(elRef?.current);
    }
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <Container>
      <CloseWrapper onClick={closeModal}></CloseWrapper>
      <Content>{children}</Content>
    </Container>,
    elRef.current
  );
};

export default Modal;
