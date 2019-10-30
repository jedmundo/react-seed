import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { useSelector } from 'react-redux'

import { ROUTE_NAME } from './routes-names'
import { Login } from '../../components/login/login'

const PublicRoutes: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.sessionReducer.isAuthenticated)
  return (
    <Switch>
      {!isAuthenticated && <Route path={ROUTE_NAME.login} component={Login} />}
      {/* In case a route is not found, redirect to the login page */}
      <Redirect from="*" to={ROUTE_NAME.login} />
    </Switch>
  )
}

export default PublicRoutes
