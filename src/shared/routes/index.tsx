import React, { FC } from 'react'
import { useSelector } from 'react-redux'

import PublicRoutes from './public-routes'
import PrivateRoutes from './private-routes'
import { Topbar } from '../../components/topbar/topbar'
import { RoutesContainer } from './routes-container.styled'

export const Router: FC = () => {
  const isAuthenticated = useSelector((state: any) => state.sessionReducer.isAuthenticated)

  return (
    <>
      <Topbar isAuthenticated={isAuthenticated} />
      <RoutesContainer>{!isAuthenticated ? <PublicRoutes /> : <PrivateRoutes />}</RoutesContainer>
    </>
  )
}
