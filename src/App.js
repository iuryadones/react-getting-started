import React from 'react'
import logoGithub from './github.svg'
import Card from './components/Card'
import Apps from './Apps'


function App() {
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
        <Card apps={Apps()}/>
      </div>
    </div>
  )
}


export default App
