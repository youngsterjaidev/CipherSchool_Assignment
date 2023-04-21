import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { Button } from "..";
import { Illustrations } from "../../assets";

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 2rem 0rem 8rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(8, 16, 16, 0.15);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 1ch;

  & > img {
    width: 40px;
  }

  & > div {
    font-weight: bold;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;

const Li = styled.li`
  display: block;
`;

const MyLink = styled(Link)`
  display: block;
  padding: 0.5rem 0.7rem;
  text-decoration: none;
  color: #000000d9;
  font-weight: bold;
  transition: all 0.5s;

  &:hover {
    color: #f3912e;
  }
`;

export default () => {
  return (
    <Nav>
      <LogoContainer>
        <img
          src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png"
          alt=""
        />
        <div>CipherSchools</div>
      </LogoContainer>
      <Ul>
        <Li>
          <MyLink to="">Home</MyLink>
        </Li>
        <Li>
          <MyLink to="">Creator Access</MyLink>
        </Li>
        <Li>
          <MyLink to="">Live Reviews</MyLink>
        </Li>
        <Li>
          <MyLink to="">Community</MyLink>
        </Li>
      </Ul>
      <div>
        <Button type="button" small>
          Explore Courses
        </Button>
      </div>
    </Nav>
  );
};
