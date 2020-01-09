import React from 'react'


function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}


function ClockStatic() {
  return <Clock date={new Date()} />
}


export default ClockStatic
