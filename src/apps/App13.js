import React from 'react'


function activateLasers() {
  console.log('Activate Lasers')
}


function ActivateLaser() {
  return (
    <div>
      <button onClick={activateLasers}>
        Ativar lasers
      </button>
    </div>
  )
}


export default ActivateLaser
