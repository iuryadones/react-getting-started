import React from 'react'

// App 15
// class Toggle extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       isToggleOn: true
//     }
//     // Aqui utilizamos o `bind`
//     // para que o `this` funcione dentro da nossa callback
//     this.handleClick = this.handleClick.bind(this)
//   }
//
//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }))
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON': 'OFF'}
//       </button>
//     )
//   }
// }
//
// function App() {
//   return (
//     <div>
//     <Toggle />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
