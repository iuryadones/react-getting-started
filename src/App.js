import React from 'react'
import logoGithub from './github.svg'
import Card from './components/Card'
import Name from './apps/App1'
import NameDict from './apps/App2'
import NameConditional from './apps/App3'
import ItIsTime from './apps/App4'
import WelcomeName from './apps/App5'
import WelcomeListName from './apps/App6'
import UserComment from './apps/App7'


function App() {
  const apps = [
    {name: 'App 1 - Name', cmp: <Name />},
    {name: 'App 2 - NameDict', cmp: <NameDict />},
    {name: 'App 3 - NameConditional', cmp: <NameConditional />},
    {name: 'App 4 - ItIsTime', cmp: <ItIsTime />},
    {name: 'App 5 - WelcomeName', cmp: <WelcomeName />},
    {name: 'App 6 - WelcomeListName', cmp: <WelcomeListName />},
    {name: 'App 7 - UserComment', cmp: <UserComment />},
  ]

  return (
    <div>
      <div
        style={{width: "10%",
                float: 'left',
                textAlign: 'center' }}>
        <a href='https://github.com/iuryadones/react-getting-started/'>
          <img src={logoGithub} alt="GitHub" width='80%' />
        </a>
      </div>
      <div style={{width: '90%',
                   float: 'right'}}>
        <Card apps={apps}/>
      </div>
    </div>
  )
}


export default App
