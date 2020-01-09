import React from 'react'


function ActionLink() {
  function handleClick(e){
    e.preventDefault()
    console.log('O link foi clicado.')
  }

  return (
    <a href='#/click' onClick={handleClick}>
      Clique Aqui
    </a>
  )
}


function ActionLinkOnClick() {
  return (
    <div>
    <ActionLink />
    </div>
  )
}


export default ActionLinkOnClick
