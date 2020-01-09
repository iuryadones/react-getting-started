import React from 'react'


function Welcome(props) {
  return <h1>Welcome! My name is {props.name}. </h1>
}

function WelcomeName() {
  const element = <Welcome name="Iury Adones" />
  return element
}

export default WelcomeName
