import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { Illustrations } from "../../assets";
import { animated, useSpring } from "@react-spring/web";

interface ComponentProps {
  isOpen?: any;
  to?: string;
}

const Container = styled(animated.nav)`
  background: #fff;
  box-shadow: 0 0 1rem rgba(8, 16, 16, 0.15);
  width: 25%;
  display: flex;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 0.5rem;
`;

const NavContainer = styled.div`
  width: 100%;
  position: relative;

  & > div:nth-of-type(1) {
    padding: 0.5rem;
  }

  & > div:nth-of-type(2) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
`;

const Ul = styled.ul`
  list-type-type: none;
  padding: 0rem;
  width: 100%;
`;

const Li = styled.li<ComponentProps>`
  display: flex;
  flex-flow: row wrap;
  justify-content: ${(props) => (props.isOpen ? `` : `center`)};
  padding: 0.5rem;
  gap: 1ch;
  border-radius: 0.4rem;
  transition: all 0.3s;

  &:hover {
    color: #fff;
    background-color: #d4843233;
  }
`;

const MyLink = styled(Link)<ComponentProps>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  padding: 0.5rem;
  font-size: ${(props) => (props.isOpen ? `1rem` : `0.7rem`)};
`;

const LoginWrapper = styled.div`
  position: absolute;
  background: #fff;
  padding: 0.5rem 1rem;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #eee;
`;

const Img = styled.img`
  width: 18px;
`;

interface Props {}

export default ({}: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const props = useSpring({
    width: isOpen ? 250 : 70,
  });

  return (
    <Container
      style={{
        width: props.width,
      }}
    >
      <NavContainer>
        <div onClick={() => setIsOpen(!isOpen)}>
          <Img src={Illustrations.hamburger} alt="" />
        </div>
        <div>
          <Ul>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                Home
              </MyLink>
            </Li>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                courses
              </MyLink>
            </Li>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                Trending
              </MyLink>
            </Li>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                Following
              </MyLink>
            </Li>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                Discord
              </MyLink>
            </Li>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                Registration Form
              </MyLink>
            </Li>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                Creator Access
              </MyLink>
            </Li>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                Feedback
              </MyLink>
            </Li>
            <Li isOpen={isOpen}>
              <Img src={Illustrations.hamburger} alt="" />
              <MyLink isOpen={isOpen} to="">
                Tour
              </MyLink>
            </Li>
          </Ul>
          <div>
            <div>popular channel</div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <LoginWrapper>
          <MyLink to="/login">Login</MyLink>
        </LoginWrapper>
      </NavContainer>
    </Container>
  );
};
