import React from 'react'


function Welcome(props) {
  return <h1>Welcome! My name is {props.name}. </h1>
}

function WelcomeListName() {
  const names = ["Iury Adones", "Pernambuco", "Recife"]
  return (
    <div>
      {
        names.map(
          (name, index) =>
          (<Welcome key={index} name={name} />)
        )
      }
    </div>
  );
}

export default WelcomeListName
