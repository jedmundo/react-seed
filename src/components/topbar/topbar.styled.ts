import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const TopbarContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid lightgrey',
  padding: 10,

  button: {
    marginLeft: 10
  }
})

export const StyledLink = styled(NavLink)({
  marginRight: '10px',
  color: '#26269a',
  textDecoration: 'none',

  [`&.active`]: {
    textDecoration: 'underline'
  }
})
