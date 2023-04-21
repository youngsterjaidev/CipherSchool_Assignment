import React from 'react'
import styled from "styled-components"

interface Props {
  small?: boolean,
  medium?: boolean,
  large?: boolean
}

export const Button = styled.button<Props>`
  
  ${props => props.small && ``}
  ${props => props.medium && ``}
  ${props => props.large && ``}
`