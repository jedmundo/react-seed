import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import PublicRoutes from './public-routes'
import PrivateRoutes from './private-routes'
import { Link } from 'react-router-dom'
import { ROUTE_NAME } from './routes-names'

export const Router: FC = () => {
  const isAuthenticated = useSelector((state: any) => state.sessionReducer.isAuthenticated)

  return (
    <>
      <div>
        <Link to={ROUTE_NAME.dashboard}>Dashboard</Link>
        <Link to={ROUTE_NAME.home}>Home</Link>
      </div>
      {!isAuthenticated ? <PublicRoutes /> : <PrivateRoutes />}
    </>
  )
}
