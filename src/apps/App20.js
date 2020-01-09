import React from 'react'

// App 20
// function NumbersMap(props) {
//   const doubled = props.numbers.map((number) => number * 2)
//   console.log(doubled)
//   return doubled.toString()
// }
//
// function NumbersListMap(props) {
//   const doubled = props.numbers.map(
//     (number) =>
//       <li key={number.toString()}>
//         {number} * 2 = {number * 2}
//       </li>
//   )
//   return (
//     <ul>
//       {doubled}
//     </ul>
//   )
// }
//
// function NumbersListMap(props) {
//   const doubled = props.numbers.map(
//     (number, index) =>
//       <li key={index}>
//         {number} * 2 = {number * 2}
//       </li>
//   )
//   return (
//     <ul>
//       {doubled}
//     </ul>
//   )
// }
//
// const numbers = [1, 2, 3, 4, 5]
//
// function App(){
//   return (
//     <div>
//       <NumbersMap numbers={numbers} />
//       <NumbersListMap numbers={numbers} />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
