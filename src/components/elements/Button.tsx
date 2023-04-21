import React from "react";
import styled from "styled-components";

interface Props {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export const Button = styled.button<Props>`
  border: 1px solid #f3912e;
  background-color: #f3912e;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  line-height: 1.25;
  padding: 0.7rem 2rem;
  font-weight: bold;
  transition: 0.15s ease;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #000000b3;
  }

  ${(props) => props.small && ``}
  ${(props) => props.medium && ``}
  ${(props) => props.large && ``}
`;
