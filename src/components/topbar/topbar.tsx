import React from 'react'
import { useTranslation } from 'react-i18next'

import { TopbarContainer, StyledLink } from './topbar.styled'
import { ROUTE_NAME } from '@shared/routes/routes-names'
import { Button } from '@material-ui/core'

interface OwnProps {
  isAuthenticated: boolean
}

export const Topbar: React.FC<OwnProps> = ({ isAuthenticated }) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <TopbarContainer>
      <div>
        <StyledLink to={ROUTE_NAME.login}>{t('login:title')}</StyledLink>
        {isAuthenticated && (
          <span>
            <StyledLink to={ROUTE_NAME.dashboard}>Dashboard</StyledLink>
            <StyledLink to={ROUTE_NAME.home}>Home</StyledLink>
          </span>
        )}
      </div>
      <div>
        Choose a language:
        <Button variant="outlined" color="primary" onClick={() => changeLanguage('en')}>
          English
        </Button>
        <Button variant="outlined" color="primary" onClick={() => changeLanguage('nl')}>
          Dutch
        </Button>
      </div>
    </TopbarContainer>
  )
}
