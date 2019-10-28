import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { ROUTE_NAME } from './shared/routes/routes-names'
import { Login } from './features/login/login'
import { Dashboard } from './features/dashboard/dashboard'
import { Home } from './features/home/home'

const App: React.FC = () => {
  return (
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
  )
}

export default App
