import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"
import { Button } from ".."

const Nav = styled.nav``

const Ul = styled.ul``

const Li = styled.li``

const MyLink = styled(Link)``

export default () => {
  return (
    <Nav>
      <div></div>
      <Ul>
        <Li><MyLink to="">Home</MyLink></Li>
        <Li><MyLink to="">Creator Access</MyLink></Li>
        <Li><MyLink to="">Live Reviews</MyLink></Li>
        <Li><MyLink to="">Community</MyLink></Li>
      </Ul>
      <div>
        <Button type="button" small>Explore Courses</Button>
      </div>
    </Nav>
  )
}