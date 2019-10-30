import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import { ROUTE_NAME } from './routes-names'
import { Login } from '../../components/login/login'
import { Home } from '../../components/home/home'

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'dashboard'*/ '../../components/dashboard/dashboard')
)

const PrivateRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={ROUTE_NAME.home} component={Home} />
      <Route path={ROUTE_NAME.login} component={Login} />
      <Route path={ROUTE_NAME.dashboard} component={Dashboard} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default PrivateRoutes
