import React from 'react'

// App 18
// function UserGreeting(props) {
//   return <h1>Welcome Back!</h1>
// }
//
// function GuestGreenting(props) {
//   return <h1>Please sign up.</h1>
// }
//
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn){
//     return <UserGreeting />
//   }
//   return <GuestGreenting />
// }
//
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   )
// }
//
// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   )
// }
//
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }
//
//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }
//
//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }
//
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//
//     button = (
//       isLoggedIn ? (
//          <LogoutButton onClick={this.handleLogoutClick} />
//       ) : (
//         <LoginButton onClick={this.handleLoginClick} />
//       )
//     )
//
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//         <p>
//           the user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//         </p>
//       </div>
//     );
//   }
// }
//
// function App() {
//   return (
//     <div>
//       <LoginControl />
//     </div>
//   )
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
