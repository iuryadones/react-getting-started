import React from 'react'
import logo from './logo.svg'
import github from './github.svg'
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
    <div>
      <div
        style={{'width': "10%",
                'float': 'left',
                'text-align': 'center' }}>
        <a href='https://github.com/iuryadones/react-getting-started/'>
          <img src={github} alt="GitHub" width='80%' />
        </a>
      </div>
      <div style={{'width': '90%',
                   'float': 'right'}}>
        <Card apps={apps}/>
      </div>
    </div>
  )
}


export default App
