import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AppHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

export const StyledLink = styled(Link)({
  marginRight: '10px',
})
