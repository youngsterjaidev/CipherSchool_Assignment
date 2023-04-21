import React from "react"
import styled from "styled-components"
import { Navbar, SideNav } from "../../components"

interface Props {
  path: string
}

const Container = styled.div``

export default ({}: Props) => {
  return (
    <div>
      <Navbar />
      <Container>
        <SideNav />
        <div></div>
      </Container>
    </div>
  )
}