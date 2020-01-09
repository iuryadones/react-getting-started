import React from 'react'


function NumbersMap(props) {
  const doubled = props.numbers.map((number) => number * 2)
  console.log(doubled)
  return doubled.toString()
}


function NumbersListMap(props) {
  const doubled = props.numbers.map(
    (number, index) =>
      <li key={index}>
        {number} * 2 = {number * 2}
      </li>
  )
  return (
    <ul>
      {doubled}
    </ul>
  )
}


function NumbersListMapString(props) {
  const doubled = props.numbers.map(
    (number) =>
      <li key={number.toString()}>
        {number} * 2 = {number * 2}
      </li>
  )
  return (
    <ul>
      {doubled}
    </ul>
  )
}


function Numbers(){
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div>
      <NumbersMap numbers={numbers} />
      <NumbersListMap numbers={numbers} />
      <NumbersListMapString numbers={numbers} />
    </div>
  )
}


export default Numbers
