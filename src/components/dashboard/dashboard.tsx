import React, { useState } from 'react'
import { useObservable } from 'rxjs-hooks'
import { PlaceholderService } from './services/placeholder.service'

const Dashboard: React.FC = () => {
  const [name, setName] = useState('')
  const value = useObservable(PlaceholderService.getPlaceholders, [])

  return (
    <>
      <div>DASHBORD WORKS</div>
      <div>{name}</div>
      <button onClick={() => setName('TEST')}>SET</button>
      <div>{JSON.stringify(value)}</div>
    </>
  )
}

export default Dashboard
