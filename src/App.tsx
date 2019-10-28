import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { ROUTE_NAME } from './shared/routes/routes-names'
import { Login } from './features/login/login'
import { Home } from './features/home/home'

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'dashboard'*/ './features/dashboard/dashboard')
)

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          {/* {!isAuthenticated && <Route path={ROUTE_NAME.login} component={Login} />} */}
          <Route path="/" exact component={Home} />
          <Route path={ROUTE_NAME.login} component={Login} />
          <Route path={ROUTE_NAME.dashboard} component={Dashboard} />
          {/* In case a route is not found, redirect to the login page */}
          <Redirect from="*" to={ROUTE_NAME.login} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
