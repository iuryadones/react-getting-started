import React from 'react'
import Card from './components/Card'
import Name from './apps/App1'
import NameDict from './apps/App2'
import NameConditional from './apps/App3'


function App() {
  const apps = [
    {name: 'App 1 - Name', cmp: <Name />},
    {name: 'App 2 - NameDict', cmp: <NameDict />},
    {name: 'App 3 - NameConditional', cmp: <NameConditional />},
  ]
  return (
    <Card apps={apps}/>
  )
}

export default App
