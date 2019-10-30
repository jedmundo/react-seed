import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import PublicRoutes from './public-routes'
import PrivateRoutes from './private-routes'
import { Topbar } from '../../components/topbar/topbar'

export const Router: FC = () => {
  const isAuthenticated = useSelector((state: any) => state.sessionReducer.isAuthenticated)

  return (
    <>
      <Topbar isAuthenticated={isAuthenticated} />
      {!isAuthenticated ? <PublicRoutes /> : <PrivateRoutes />}
    </>
  )
}
