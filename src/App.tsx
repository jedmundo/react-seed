import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './shared/routes'
import './shared/i18n/i18n'
import { GlobalStyles } from './shared/components/global-styles'

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  )
}

export default App
