import React from 'react'
import { useTranslation } from 'react-i18next'

import { AppHeader } from './app-header.styled'

export const Topbar: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <AppHeader>
      Choose a language:
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('nl')}>Dutch</button>
    </AppHeader>
  )
}
